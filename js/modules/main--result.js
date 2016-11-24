// Экран результатов main--result
import htmlToElements from '../htmlToElements';
import mainWelcome from './main--welcome';
import selectScreen from '../selectScreen';
import logo from './logo';

export default (data) => {

  // Шаблоны разметки
  const contentHtml = `<h2 class="title">${data.title}</h2>
                    <div class="main-stat">За&nbsp;${data.stat.minute}&nbsp;минуты<br>вы&nbsp;отгадали ${data.stat.songs}&nbsp;мелодии</div>
                    <span class="main-comparison">Это&nbsp;лучше чем у&nbsp;${data.stat.compare}&nbsp;игроков</span>`;

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
