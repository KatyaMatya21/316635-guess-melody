// Экран результатов main--result
import htmlToElements from '../htmlToElements';
import mainWelcome from './main--welcome';
import selectScreen from '../selectScreen';
import logo from './logo';

export default (data) => {

  // Шаблоны разметки
  const contentHtml = `<h2 class="title">${data.content.title}</h2>
                    <div class="main-stat">${data.content.stat.main}</div>
                    <span class="main-comparison">${data.content.stat.compare}</span>`;

  const playButtonHtml = `<span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>`;

  const article = `<section class="main main--result">
                  ${logo}
                  ${contentHtml}
                  ${playButtonHtml}
                </section>`;

  const mainResult = htmlToElements(article);

// Переключение на главный экран
  mainResult.querySelector('.main-replay').addEventListener('click', () => selectScreen(mainWelcome()));

  return mainResult;
};
