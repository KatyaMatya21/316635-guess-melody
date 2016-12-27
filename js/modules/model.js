import InitialState from '../data-state';

export default class Model {

  constructor(state = InitialState) {
    this._state = new InitialState();
  }

  tick() {
    if (this._state.time > 0) {
      this._state.time--;
    } else {
      this._state.time = 0;
    }
  }

  deduceLives() {
    if (this._state.lives > 0) {
      this._state.lives--;
    } else {
      this._state.lives = 0;
    }
  }

  getScore() {
    return this._state.score;
  }

  getTime() {
    return this._state.time;
  }

  getLives() {
    return this._state.lives;
  }

  reset() {
    this._state = new InitialState();
  }

  addScore() {
    this._state.score++;
  }

}
