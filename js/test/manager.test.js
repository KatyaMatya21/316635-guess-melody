import assert from 'assert';
import Screen from '../modules/screen';
import Manager from '../modules/manager';

describe('Manager Class', () => {

  describe('getScore', () => {
    it('should return manager.score', () => {
      const manager = new Manager( [{
        type: Screen.screentype.START
      }]);
      manager.score = 5;
      let result = manager.getScore();
      assert.equal(result, 5);
      assert.notEqual(result, 0);
      assert.notEqual(result, -1);
    });
  });

  describe('getScreenFromData', () => {
    it('should return screen with set manager', () => {
      const manager = new Manager( [{
        type: Screen.screentype.ARTIST,
        question: 'Кто исполняет эту песню?',
        mp3: '...',
        answers: [
          {
            singer: 'Daughter',
            correct: false,
            urlPic: 'img/band/1.jpg'
          },
          {
            singer: 'The Strokes',
            correct: false,
            urlPic: 'img/band/2.jpg'
          },
          {
            singer: 'Kings of Leon',
            correct: true,
            urlPic: 'img/band/3.jpg'
          }
        ]
      }]);
      const Instance = manager.getScreenFromData(manager.data[0]);
      assert(Instance.manager);
    });
  });

  describe('startTimer test of start time', () => {
    it('starts from 120', () => {
      const manager = new Manager( [{
        type: Screen.screentype.ARTIST,
        question: 'Кто исполняет эту песню?',
        mp3: '...',
        answers: [
          {
            singer: 'Daughter',
            correct: false,
            urlPic: 'img/band/1.jpg'
          },
          {
            singer: 'The Strokes',
            correct: false,
            urlPic: 'img/band/2.jpg'
          },
          {
            singer: 'Kings of Leon',
            correct: true,
            urlPic: 'img/band/3.jpg'
          }
        ]
      }]);
      assert.equal(manager.timerTime, 120);
    });
  });

  describe('startTimer link', () => {
    it('set timer link', () => {
      const manager = new Manager( [{
        type: Screen.screentype.ARTIST,
        question: 'Кто исполняет эту песню?',
        mp3: '...',
        answers: [
          {
            singer: 'Daughter',
            correct: false,
            urlPic: 'img/band/1.jpg'
          },
          {
            singer: 'The Strokes',
            correct: false,
            urlPic: 'img/band/2.jpg'
          },
          {
            singer: 'Kings of Leon',
            correct: true,
            urlPic: 'img/band/3.jpg'
          }
        ]
      }]);
      manager.startTimer();
      assert(manager.timer);
    });
  });

  describe('getTime time', () => {
    it('get time', () => {
      const manager = new Manager( [{
        type: Screen.screentype.ARTIST,
        question: 'Кто исполняет эту песню?',
        mp3: '...',
        answers: [
          {
            singer: 'Daughter',
            correct: false,
            urlPic: 'img/band/1.jpg'
          },
          {
            singer: 'The Strokes',
            correct: false,
            urlPic: 'img/band/2.jpg'
          },
          {
            singer: 'Kings of Leon',
            correct: true,
            urlPic: 'img/band/3.jpg'
          }
        ]
      }]);
      const time = manager.getTime();
      assert(time);
    });
  });

});
