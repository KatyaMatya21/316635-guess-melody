import htmlToElements from './htmlToElements';

export default class TimerElement {

  constructor(initialTime) {
    this.time = initialTime;
    this.initialTime = initialTime;
    this.stop = null;
  }

  getMarkup() {

    if (this.element) {
      return this.element;
    }

    const timerHtml = `<div><svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
			  <circle cx="390" cy="390" r="370" class="timer-line" style="filter: url(.#blur); 
			  transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>
			</svg><div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
			  <span class="timer-value-mins">02</span><!--
			  --><span class="timer-value-dots">:</span><!--
			  --><span class="timer-value-secs">00</span>
			  </div></div>`;

    this.element = htmlToElements(timerHtml);

    return this.element;

  }

  reset() {
    this.time = this.initialTime;
    this.redrawTimer(this.element.querySelector('.timer-value'), this.getAnimation(0, 1000, this.time));
    this.redrawCircle(this.element.querySelector('.timer-line'), parseInt(this.element.querySelector('.timer-line').getAttributeNS(null, 'r'), 10), this.getAnimation(0, 1000, this.time));
  }

  start() {
    this.stop = this.initializeCountdown();
  }

  redrawCircle(circle, radius, animation) {
    const length = 2 * Math.PI * radius;
    const stepLength = length / animation.steps;
    const lengthToClear = stepLength * animation.step;

    circle.setAttributeNS(null, 'r', radius.toString());
    circle.setAttributeNS(null, 'stroke-dasharray', length.toString());
    circle.setAttributeNS(null, 'stroke-dashoffset', lengthToClear.toString());

    return circle;
  }

  addLeadingZero(val) {
    return val < 10 ? `0${val}` : val;
  }

  redrawTimer(timer, animation) {
    const total = animation.stepDuration * animation.steps;
    const passed = animation.stepDuration * animation.step;
    const timeLeft = this.formatTime(total, passed);

    timer.querySelector('.timer-value-mins').textContent = this.addLeadingZero(timeLeft.minutes);
    timer.querySelector('.timer-value-secs').textContent = this.addLeadingZero(timeLeft.seconds);

    return timer;
  }

  initializeCountdown() {
    const element = this.element.querySelector('.timer-line');
    const radius = parseInt(element.getAttributeNS(null, 'r'), 10);
    const timer = this.element.querySelector('.timer-value');

    return this.animate(this.getAnimation(0, 1000, this.time), (animation) => {
      this.redrawCircle(element, radius, animation);
      this.redrawTimer(timer, animation);
    }, () => timer.classList.add('timer-value--finished'));
  }

  getAnimation(step, stepDuration, steps) {
    return {
      step: step,
      stepDuration: stepDuration,
      steps: steps
    };
  }

  animate(animation, callback, callbackEnd) {
    const interval = setInterval(() => {
      const nextStep = animation.step + 1;
      if (nextStep <= animation.steps) {
        animation = this.getAnimation(nextStep, animation.stepDuration, animation.steps);
        callback(animation);
      } else {
        stopFn();
        if (typeof callbackEnd === 'function') {
          callbackEnd();
        }
      }
    }, animation.stepDuration);

    const stopFn = () => clearInterval(interval);

    return stopFn;
  }

  formatTime(total, passed) {
    const minutesLeft = Math.floor((total - passed) / 60 / 1000);
    const secondsLeft = (total - passed - minutesLeft * 60 * 1000) / 1000;

    return {
      minutes: minutesLeft,
      seconds: secondsLeft
    };
  }

}
