import mainWelcome from './main--welcome';
import mainArtist from './main--artist';
import mainGenre from './main--genre';
import mainResult from './main--result';

(function () {

  let slides = [
    mainWelcome,
    mainArtist,
    mainGenre,
    mainResult
  ];

  let current = -1;

  let select = (index) => {
    current = index;
    let mainElement = document.querySelector('.main');
    mainElement.parentNode.replaceChild(slides[index], mainElement);
  };

  document.onkeydown = (evt) => {
    evt.preventDefault();

    switch (evt.keyCode) {
      case 37:
        current--;
        break;
      case 39:
        current++;
        break;
    }

    select(current);
  };

  select(0);

})();
