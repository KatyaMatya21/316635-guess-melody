import logoHtml from './logo';
import dataStatistics from '../data-statistics';
import htmlToElements from './htmlToElements';
import Screen from './screen';

export default class ScreenEnd extends Screen {

  constructor(data) {
    super(Screen.screentype.END, data);
  }

  renderHtml() {

    this.manager.stopTimer();

    const seconds = 120 - (this.manager.getTime());
    const minutes = (seconds / 60).toFixed(1);
    const score = this.getManagerScore();

    dataStatistics.push({time: seconds, answers: score, current: true});
    dataStatistics.sort((x, y) => {
      return y.answers - x.answers || x.time - y.time;
    });

    let currentResult = 0;
    dataStatistics.map((item, n) => {
      if ('current' in item) {
        currentResult = n;
      }
    });
    const pos = Math.floor(((dataStatistics.length - currentResult) / dataStatistics.length) * 100);

    const template = `<section class="main main--result">
    ${logoHtml}
    <h2 class="title">${this.data.title}</h2>
    <div class="main-stat">За&nbsp;${minutes}&nbsp;минуты<br>вы&nbsp;отгадали ${score}&nbsp;мелодии</div>
    <span class="main-comparison">Это&nbsp;лучше чем у&nbsp;${pos}% игроков</span>
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
    </section>`;

    this.element = htmlToElements(template);
    this.bindHandlers();

    return this.element;
  }

  bindHandlers() {
    this.element.querySelector('.main-replay').addEventListener('click', () => {
      this.nextScreen();
    });
  }

}
