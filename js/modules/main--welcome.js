// Главный экран main--welcome
import htmlToElements from '../htmlToElements';
import mainArtist from './main--artist';
import selectScreen from '../selectScreen';
import logo from './logo';

export default (data) => {

  // Шаблоны разметки
  const logoHtml = logo({ 'logo': data.logo });

  const contentHtml = `<button class="main-play">${data.content.play}</button>
                      <h2 class="title main-title">${data.content.rules.title}</h2>
                      <p class="text main-text">${data.content.rules.text}</p>`;

  const article = `<section class="main main--welcome">
                    ${logoHtml}
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
