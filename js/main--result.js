// Экран результатов main--result
import htmlToElements from './htmlToElements';
import mainWelcome from './main--welcome';
import selectScreen from './selectScreen';

// Данные
const result = {
  logo: 'Угадай мелодию',
  content: {
    title: 'Вы настоящий меломан!',
    stat: {
      main: 'За&nbsp;2&nbsp;минуты<br>вы&nbsp;отгадали 4&nbsp;мелодии',
      compare: 'Это&nbsp;лучше чем у&nbsp;80%&nbsp;игроков'
    },
    button: 'Сыграть ещё раз'
  }
};

// Шаблоны разметки
const headerHtml = `<section class="logo" title="Угадай мелодию"><h1>${result.logo}</h1></section>`;

const contentHtml = `<h2 class="title">${result.content.title}</h2>
                    <div class="main-stat">${result.content.stat.main}</div>
                    <span class="main-comparison">${result.content.stat.compare}</span>`;

const playButtonHtml = `<span role="button" tabindex="0" class="main-replay">${result.content.button}</span>`;

const article = `<section class="main main--result">
                  ${headerHtml}
                  ${contentHtml}
                  ${playButtonHtml}
                </section>`;

const mainResult = htmlToElements(article);

// Переключение на главный экран
mainResult.querySelector('.main-replay').addEventListener('click', () => selectScreen(mainWelcome));

export default mainResult;
