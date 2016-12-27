import Screen from './screen';
import ScreenStart from './screen--start';
import ScreenEnd from './screen--end';
import ScreenArtist from './screen--artist';
import ScreenGenre from './screen--genre';
import Model from './model';
import TimerElement from './timer';

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
    this.timer = null;
    this.state = new Model();
    this.timerElement = null;
  }

  start() {

    let app = document.querySelector('.app');
    let mainElement = document.querySelector('.main');

    this.timerElement = new TimerElement( this.state.getTime() );
    let markup = this.timerElement.getMarkup();

    app.insertBefore( markup, mainElement );

    this.showScreen(this.data[this.currentScreen]);
  }

  next(correct) {

    this.currentScreen += 1;
    if (this.currentScreen > this.data.length - 1) {
      this.currentScreen = 0;
      this.state.reset();
      this.stopTimer();
      this.timerElement.reset();
    }

    if (correct !== undefined) {
      if (correct) {
        this.state.addScore();
      } else {
        this.state.deduceLives();
        if (this.state.getLives() < 1) {
          this.currentScreen = this.data.length - 1;
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
    return this.state.getScore();
  }

  startTimer() {
    this.timerTime = this.state.getTime();

    this.timerElement.reset();
    this.timerElement.start();

    this.timer = setInterval(() => {
      this.state.tick();
      if (this.state.getTime() < 1) {
        this.currentScreen = this.data.length - 2;
        this.stopTimer();
        this.next();
      }
    }, 1000);
  }

  stopTimer() {
    this.timerElement.stop();
    clearInterval(this.timer);
  }

  getTime() {
    return this.state.getTime();
  }

}
