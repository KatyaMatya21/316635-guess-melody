import Screen from './modules/screen';

export default [
  {
    type: Screen.screentype.START
  },
  {
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
  },
  {
    type: Screen.screentype.GENRE,
    question: 'Выберите блюз композицию',
    answers: [
      {
        song: 'answer-1',
        correct: true,
        mp3: '...'
      },
      {
        song: 'answer-2',
        correct: false,
        mp3: '...'
      },
      {
        song: 'answer-3',
        correct: false,
        mp3: '...'
      },
      {
        song: 'answer-4',
        correct: false,
        mp3: '...'
      }
    ]
  },
  {
    type: Screen.screentype.ARTIST,
    question: 'Кто исполняет эту песню?',
    mp3: '...',
    answers: [
      {
        singer: 'Mujuice',
        correct: false,
        urlPic: 'img/band/4.jpg'
      },
      {
        singer: 'The Cancel',
        correct: true,
        urlPic: 'img/band/5.jpg'
      },
      {
        singer: 'SunSay',
        correct: false,
        urlPic: 'img/band/6.jpg'
      }
    ]
  },
  {
    type: Screen.screentype.GENRE,
    question: 'Выберите блюз композицию',
    answers: [
      {
        song: 'answer-1',
        correct: false,
        mp3: '...'
      },
      {
        song: 'answer-2',
        correct: true,
        mp3: '...'
      },
      {
        song: 'answer-3',
        correct: false,
        mp3: '...'
      },
      {
        song: 'answer-4',
        correct: false,
        mp3: '...'
      }
    ]
  },
  {
    type: Screen.screentype.END,
    title: 'Вы настоящий меломан!',
    stat: {
      minute: 2,
      songs: 3,
      compare: 0.8
    }
  }
];
