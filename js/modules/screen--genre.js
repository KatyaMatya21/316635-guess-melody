import htmlToElements from './htmlToElements';
import Screen from './screen';

export default class ScreenGenre extends Screen {

  constructor(data) {
    super(Screen.screentype.GENRE, data);
  }

  renderHtml() {

    const questionHtml = `<h2 class="title">${this.data.question}</h2>`;

    let answersHtml = this.data.answers.map((answer, n) => {
      return `<div class="genre-answer">
       <div class="player-wrapper"></div>
       <input type="checkbox" name="answer" value="${answer.song}" id="a-${n + 1}" data-index="${n}">
       <label class="genre-answer-check" for="a-${n + 1}"></label>
      </div>`;
    }).join('');

    const article = `<section class="main main--level main--level-genre">
      ${questionHtml} 
      <form class="genre">
        ${answersHtml}
        <button class="genre-answer-send" type="submit" disabled>Ответить</button>
      </form>
    </section>`;

    const element = htmlToElements(article);

    const sendAnswerBtn = element.querySelector('.genre-answer-send');
    const checkboxList = element.querySelectorAll('.genre-answer input[type="checkbox"]');

    for ( let item of checkboxList) {
      item.addEventListener('change', () => {
        sendAnswerBtn.disabled = !element.querySelectorAll('input[type="checkbox"]:checked').length;
      });
    }

    sendAnswerBtn.addEventListener('click', (event) => {
      event.preventDefault();

      let checkedFlag = true;
      const checkedCheckbox = element.querySelectorAll('input[type="checkbox"]:checked');

      for ( let item of checkedCheckbox) {
        const selectedIndex = item.dataset.index;
        const isCorrectAnswer = this.data.answers[selectedIndex].correct;

        if (!isCorrectAnswer) {
          checkedFlag = false;
          break;
        }
      }

      this.nextScreen(checkedFlag);
    });

    return element;
  }

}
