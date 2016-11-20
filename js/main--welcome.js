// Главный экран main--welcome
import htmlToElements from './get-template';
import mainArtist from './main--artist';
import selectScreen from './selectScreen';

// Шаблон разметки
const mainWelcomeHtml = `<section class="main main--welcome">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <button class="main-play">Начать игру</button>
    <h2 class="title main-title">Правила игры</h2>
    <p class="text main-text">
      Правила просты&nbsp;— за&nbsp;2 минуты дать
      максимальное количество правильных ответов.<br>
      На&nbsp;каждую мелодию всего 3 варианта ответа.<br>
      Удачи!
    </p>
  </section>`;

const mainWelcome = htmlToElements(mainWelcomeHtml);

// Переключение на первый экран игры
mainWelcome.querySelector('.main-play').addEventListener('click', () => selectScreen(mainArtist));

export default mainWelcome;
