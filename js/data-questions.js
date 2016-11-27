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
        urlPic: '...'
      },
      {
        singer: 'The Strokes',
        correct: false,
        urlPic: '...'
      },
      {
        singer: 'Kings of Leon',
        correct: true,
        urlPic: '...'
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
    type: Screen.screentype.END,
    title: 'Вы настоящий меломан!',
    stat: {
      minute: 2,
      songs: 3,
      compare: 0.8
    }
  }
];
