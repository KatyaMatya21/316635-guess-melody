import htmlToElements from './htmlToElements';
import Screen from './screen';

export default class ScreenArtist extends Screen {

  constructor(data) {
    super(Screen.screentype.ARTIST, data);
  }

  renderHtml() {

    if (this.element) {
      return this.element;
    }

    const timerHtml = '';

    const questionHtml = `<h2 class="title main-title">${this.data.question}</h2>`;

    let answersHtml = this.data.answers.map((answer, n) => {
      return `<div class="main-answer-wrapper">
       <input class="main-answer-r" type="radio" id="answer-${n + 1}" name="answer" value="val-${n + 1}" />
       <label class="main-answer" for="answer-${n + 1}" data-index="${n}">
       <img class="main-answer-preview" src="${answer.urlPic}">
        ${answer.singer}
       </label>
      </div>`;
    }).join('');

    const article = `<section class="main main--level main--level-artist">
      ${timerHtml}
      <div class="main-wrap">
        <div class="main-timer"></div>
        ${questionHtml}
        <div class="player-wrapper"></div>
        <form class="main-list">
          ${answersHtml}
        </form>
      </div>
    </section>`;

    this.element = htmlToElements(article);
    this.bindHandlers();

    return this.element;
  }

  bindHandlers() {
    const answerBtnList = this.element.querySelectorAll('.main-answer');

    answerBtnList.forEach((button) => button.addEventListener('click', (event) => {
      const selectedIndex = event.currentTarget.dataset.index;
      const selectedAnswer = this.data.answers[selectedIndex].correct;
      this.nextScreen(selectedAnswer);
    }));
  }

}
