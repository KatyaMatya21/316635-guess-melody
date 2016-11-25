import Screen from './modules/screen';

export default [
  {
    type: Screen.screentype.START
  },
  {
    type: Screen.screentype.ARTIST,
    question: 'Кто исполняет эту песню?',
    answers: [
      {
        singer: 'Daughter',
        correct: 0,
        urlPic: '...'
      },
      {
        singer: 'The Strokes',
        correct: 0,
        urlPic: '...'
      },
      {
        singer: 'Kings of Leon',
        correct: 1,
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
        correct: 0,
        urlMp3: '...'
      },
      {
        song: 'answer-2',
        correct: 0,
        urlMp3: '...'
      },
      {
        song: 'answer-3',
        correct: 1,
        urlMp3: '...'
      },
      {
        song: 'answer-4',
        correct: 0,
        urlMp3: '...'
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
