// Экран результатов main--result
import htmlToElements from './htmlToElements';
import mainWelcome from './main--welcome';
import selectScreen from './selectScreen';

// Шаблон разметки
const mainResultHtml = `<section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <h2 class="title">Вы настоящий меломан!</h2>
    <div class="main-stat">За&nbsp;2&nbsp;минуты<br>вы&nbsp;отгадали 4&nbsp;мелодии</div>
    <span class="main-comparison">Это&nbsp;лучше чем у&nbsp;80%&nbsp;игроков</span>
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
  </section>`;

const mainResult = htmlToElements(mainResultHtml);

// Переключение на главный экран
mainResult.querySelector('.main-replay').addEventListener('click', () => selectScreen(mainWelcome));

export default mainResult;
