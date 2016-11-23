// Второй экран игры main--level-genre
import htmlToElements from './htmlToElements';
import mainResult from './main--result';
import selectScreen from './selectScreen';

export default (data) => {

// Шаблоны разметки
  const questionHtml = `<h2 class="title">${data.question}</h2>`;

  let answersHtml = '';
  data.answer.forEach((answer, n) => {
    answersHtml += `<div class="genre-answer">
                    <div class="player-wrapper"></div>
                    <input type="checkbox" name="answer" value="${answer}" id="a-${n}">
                    <label class="genre-answer-check" for="a-${n}"></label>
                  </div>`;
  });

  const playButtonHtml = `<button class="genre-answer-send" type="submit" disabled>${data.play}</button>`;

  const article = `<section class="main main--level main--level-genre">
                  ${questionHtml} 
                  <form class="genre">
                    ${answersHtml}
                    ${playButtonHtml}
                  </form>
                </section>`;

  const mainGenre = htmlToElements(article);

  const sendAnswerBtn = mainGenre.querySelector('.genre-answer-send');
  const checkboxList = mainGenre.querySelectorAll('.genre-answer input[type="checkbox"]');

// Отслеживание изменений состояний чекбоксов
  checkboxList.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
      sendAnswerBtn.disabled = !mainGenre.querySelectorAll('input[type="checkbox"]:checked').length;
    });
  });

// Переключение на результаты
  const nextScreen = (evt) => {
    selectScreen(mainResult({
      logo: 'Угадай мелодию',
      content: {
        title: 'Вы настоящий меломан!',
        stat: {
          main: 'За&nbsp;2&nbsp;минуты<br>вы&nbsp;отгадали 4&nbsp;мелодии',
          compare: 'Это&nbsp;лучше чем у&nbsp;80%&nbsp;игроков'
        },
        button: 'Сыграть ещё раз'
      }
    }));
    evt.preventDefault();
  };

// Переключение на экран с результатом
  sendAnswerBtn.addEventListener('click', nextScreen);

  return mainGenre;
};
