import logoHtml from './logo';
import htmlToElements from './htmlToElements';
import Screen from './screen';

export default class ScreenStart extends Screen {

  constructor() {
    super(Screen.screentype.START);
  }

  renderHtml() {

    if (this.element) {
      return this.element;
    }

    const template = `<section class="main main--welcome">
    ${logoHtml}
    <button class="main-play">Начать игру</button>
    <h2 class="title main-title">Правила игры</h2>
    <p class="text main-text">
    Правила просты&nbsp;— за&nbsp;2 минуты дать максимальное количество правильных ответов.<br> 
    На&nbsp;каждую мелодию всего 3 варианта ответа.<br> 
    Удачи!
    </p>
    </section>`;

    this.element = htmlToElements(template);
    this.bindHandlers();

    return this.element;
  }

  bindHandlers() {
    this.element.querySelector('.main-play').addEventListener('click', () => {
      this.manager.startTimer();
      this.nextScreen();
    });
  }

}
