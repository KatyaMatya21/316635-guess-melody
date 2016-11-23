// Главный экран main--welcome
import htmlToElements from './htmlToElements';
import mainArtist from './main--artist';
import selectScreen from './selectScreen';

// Данные
const welcome = {
  logo: 'Угадай мелодию',
  content: {
    play: 'Начать игру',
    rules: {
      title: 'Правила игры',
      text: 'Правила просты&nbsp;— за&nbsp;2 минуты дать максимальное количество правильных ответов.<br> На&nbsp;каждую мелодию всего 3 варианта ответа.<br> Удачи!'
    }
  }
};

// Шаблоны разметки
const headerHtml = `<section class="logo" title="Угадай мелодию"><h1>${welcome.logo}</h1></section>`;

const contentHtml = `<button class="main-play">${welcome.content.play}</button>
                    <h2 class="title main-title">${welcome.content.rules.title}</h2>
                    <p class="text main-text">${welcome.content.rules.text}</p>`;

const article = `<section class="main main--welcome">
                  ${headerHtml}
                  ${contentHtml}
                </section>`;

const mainWelcome = htmlToElements(article);

// Переключение на первый экран игры
mainWelcome.querySelector('.main-play').addEventListener('click', () => selectScreen(mainArtist));
export default mainWelcome;
