// Экран первой игры main--level-artist
import htmlToElements from './htmlToElements';
import mainGenre from './main--genre';
import selectScreen from './selectScreen';

// Данные
const artist = {
  question: 'Кто исполняет эту песню?',
  answer: ['Пелагея', 'Краснознаменная дивизия имени моей бабушки', 'Lorde']
};

// Шаблоны разметки
const timerHtml = `<svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
                    <circle cx="390" cy="390" r="370" class="timer-line" style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>
                    <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
                    <span class="timer-value-mins">02</span><!--
                    --><span class="timer-value-dots">:</span><!--
                    --><span class="timer-value-secs">00</span>
                    </div>
                  </svg>`;

const questionHtml = `<h2 class="title main-title">${artist.question}</h2>`;

let answersHtml = '';
artist.answer.forEach((answer) => {
  answersHtml += `<div class="main-answer-wrapper">
                    <input class="main-answer-r" type="radio" id="answer-1" name="answer" value="val-1" />
                    <label class="main-answer" for="answer-1">
                      <img class="main-answer-preview" src="">
                      ${answer}
                    </label>
                  </div>`;
});

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

const mainArtist = htmlToElements(article);

// Переключение на второй экран игры
const answerBtnList = mainArtist.querySelectorAll('.main-answer');
const nextScreen = () => {
  selectScreen(mainGenre);
};
answerBtnList.forEach((button) => button.addEventListener('click', nextScreen));

export default mainArtist;
