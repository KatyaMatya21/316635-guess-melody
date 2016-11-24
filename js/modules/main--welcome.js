// Главный экран main--welcome
import htmlToElements from '../htmlToElements';
import mainArtist from './main--artist';
import selectScreen from '../selectScreen';
import logo from './logo';

export default () => {

  // Шаблоны разметки
  const contentHtml = `<button class="main-play">Начать игру</button>
                      <h2 class="title main-title">Правила игры</h2>
                      <p class="text main-text">Правила просты&nbsp;— за&nbsp;2 минуты дать максимальное количество правильных ответов.<br> На&nbsp;каждую мелодию всего 3 варианта ответа.<br> Удачи!</p>`;

  const article = `<section class="main main--welcome">
                    ${logo}
                    ${contentHtml}
                  </section>`;

  const mainWelcome = htmlToElements(article);

  // Переключение на первый экран игры
  mainWelcome.querySelector('.main-play').addEventListener('click', () => selectScreen(mainArtist({
    question: 'Кто исполняет эту песню?',
    answer: ['Daughter', 'The Strokes', 'Kings of Leon']
  })));

  return mainWelcome;
};
