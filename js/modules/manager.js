import Screen from './screen';
import ScreenStart from './screen--start';
import ScreenEnd from './screen--end';
import ScreenArtist from './screen--artist';
import ScreenGenre from './screen--genre';

export default class Manager {

  constructor(data) {
    this.data = data;
    this.typemap = new Map([
      [Screen.screentype.START, ScreenStart],
      [Screen.screentype.END, ScreenEnd],
      [Screen.screentype.ARTIST, ScreenArtist],
      [Screen.screentype.GENRE, ScreenGenre]
    ]);
    this.currentScreen = 0;
  }

  start() {
    this.showScreen(this.data[this.currentScreen]);
  }

  next() {
    this.currentScreen += 1;
    if (this.currentScreen > this.data.length - 1) {
      this.currentScreen = 0;
    }
    this.showScreen(this.data[this.currentScreen]);
  }

  showScreen(screenData) {

    let screen = this.getScreenFromData(screenData);

    let mainElement = document.querySelector('.main');

    mainElement.parentNode.replaceChild(
        screen.renderHtml(),
        mainElement
    );

  }

  getScreenFromData(data) {
    let Instance = this.typemap.get(data.type);
    Instance = new Instance(data);
    Instance.setManager(this);
    return Instance;
  }

}
