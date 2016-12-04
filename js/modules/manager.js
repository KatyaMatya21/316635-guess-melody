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
    this.lives = 3;
    this.score = 0;
    this.timer = null;
    this.timerTime = 120;
  }

  start() {
    this.showScreen(this.data[this.currentScreen]);
  }

  next(correct) {
    this.currentScreen += 1;
    if (this.currentScreen > this.data.length - 1) {
      this.currentScreen = 0;
      this.lives = 3;
      this.score = 0;
    }

    if (correct !== 'undefined') {
      if (correct) {
        this.score += 1;
      } else {
        if (this.lives > 1) {
          this.lives -= 1;
        } else {
          this.currentScreen = this.data.length - 1;
          this.lives -= 1;
        }
      }
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

  getScore() {
    return this.score;
  }

  startTimer() {
    this.timerTime = 120;
    this.timer = setInterval(() => {
      this.timerTime -= 1;
      if (this.timerTime < 1) {
        this.currentScreen = this.data.length - 2;
        this.next();
        this.stopTimer();
      }
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timer);
  }

  getTime() {
    return this.timerTime;
  }

}
