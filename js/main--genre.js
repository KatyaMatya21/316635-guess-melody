// Экран второй игры main--level-genre
import htmlToElements from './htmlToElements';
import mainResult from './main--result';
import selectScreen from './selectScreen';

// Шаблон разметки
const mainGenreHtml = `<section class="main main--level main--level-genre">
    <h2 class="title">Выберите инди-рок треки</h2>
    <form class="genre">
      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="a-1">
        <label class="genre-answer-check" for="a-1"></label>
      </div>
      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="a-2">
        <label class="genre-answer-check" for="a-2"></label>
      </div>
      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="a-3">
        <label class="genre-answer-check" for="a-3"></label>
      </div>
      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="a-4">
        <label class="genre-answer-check" for="a-4"></label>
      </div>
      <button class="genre-answer-send" type="submit" disabled>Ответить</button>
    </form>
  </section>`;

const mainGenre = htmlToElements(mainGenreHtml);

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
  selectScreen(mainResult);
  evt.preventDefault();
};

// Переключение на экран с результатом
sendAnswerBtn.addEventListener('click', nextScreen);

export default mainGenre;
