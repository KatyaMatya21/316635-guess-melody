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
        correct: true,
        urlPic: 'img/band/1.jpg'
      },
      {
        singer: 'The Strokes',
        correct: false,
        urlPic: 'img/band/2.jpg'
      },
      {
        singer: 'Kings of Leon',
        correct: false,
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
        correct: true,
        urlPic: 'img/band/4.jpg'
      },
      {
        singer: 'The Cancel',
        correct: false,
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
        singer: 'The Dø',
        correct: true,
        urlPic: 'img/band/7.jpg'
      },
      {
        singer: 'Dion & the Belmonts',
        correct: false,
        urlPic: 'img/band/8.jpg'
      },
      {
        singer: 'The Skinny Boys',
        correct: false,
        urlPic: 'img/band/9.jpg'
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
        singer: 'Yann Tiersen',
        correct: true,
        urlPic: 'img/band/10.jpg'
      },
      {
        singer: 'Gorillaz',
        correct: false,
        urlPic: 'img/band/11.jpg'
      },
      {
        singer: 'The Killers',
        correct: false,
        urlPic: 'img/band/12.jpg'
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
        singer: 'The Kooks',
        correct: true,
        urlPic: 'img/band/13.jpg'
      },
      {
        singer: 'Ratatat',
        correct: false,
        urlPic: 'img/band/14.jpg'
      },
      {
        singer: 'Miike Snow',
        correct: false,
        urlPic: 'img/band/15.jpg'
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
    title: 'Вы настоящий меломан!'
  }
];
