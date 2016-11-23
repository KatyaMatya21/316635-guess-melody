// Экран результатов main--result
import htmlToElements from './htmlToElements';
import mainWelcome from './main--welcome';
import selectScreen from './selectScreen';

export default (data) => {

  // Шаблоны разметки
  const headerHtml = `<section class="logo" title="Угадай мелодию"><h1>${data.logo}</h1></section>`;

  const contentHtml = `<h2 class="title">${data.content.title}</h2>
                    <div class="main-stat">${data.content.stat.main}</div>
                    <span class="main-comparison">${data.content.stat.compare}</span>`;

  const playButtonHtml = `<span role="button" tabindex="0" class="main-replay">${data.content.button}</span>`;

  const article = `<section class="main main--result">
                  ${headerHtml}
                  ${contentHtml}
                  ${playButtonHtml}
                </section>`;

  const mainResult = htmlToElements(article);

// Переключение на главный экран
  mainResult.querySelector('.main-replay').addEventListener('click', () => selectScreen(mainWelcome({
    logo: 'Угадай мелодию',
    content: {
      play: 'Начать игру',
      rules: {
        title: 'Правила игры',
        text: 'Правила просты&nbsp;— за&nbsp;2 минуты дать максимальное количество правильных ответов.<br> На&nbsp;каждую мелодию всего 3 варианта ответа.<br> Удачи!'
      }
    }
  })));

  return mainResult;
};
