import logoHtml from './logo';
import htmlToElements from '../htmlToElements';
import Screen from './screen';

export default class ScreenEnd extends Screen {

  constructor(data) {
    super(Screen.screentype.END, data);
  }

  renderHtml() {

    const template = `<section class="main main--result">
    ${logoHtml}
    <h2 class="title">${this.data.title}</h2>
    <div class="main-stat">За&nbsp;${this.data.stat.minute}&nbsp;минуты<br>вы&nbsp;отгадали ${this.data.stat.songs}&nbsp;мелодии</div>
    <span class="main-comparison">Это&nbsp;лучше чем у&nbsp;${this.data.stat.compare}&nbsp;игроков</span>
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
    </section>`;

    const element = htmlToElements(template);
    element.querySelector('.main-replay').addEventListener('click', this.nextScreen.bind(this));

    return element;
  }

}
