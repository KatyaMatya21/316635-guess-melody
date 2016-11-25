export default class Screen {

  static get screentype() {
    return {
      'ARTIST': 0,
      'GENRE': 1,
      'START': 2,
      'END': 3
    };
  }

  constructor( type, data = {} ) {
    this.data = data;
    this.type = type;
    this.manager = null;
  }

  renderHtml() {

  }

  nextScreen() {
    this.manager.next();
  }

  setManager(manager) {
    this.manager = manager;
  }

}
