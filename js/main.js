import mainWelcome from './modules/main--welcome';
import selectScreen from './selectScreen';

// Загрузка главного экрана main--welcome
selectScreen(
    mainWelcome({
      logo: 'Угадай мелодию',
      content: {
        play: 'Начать игру',
        rules: {
          title: 'Правила игры',
          text: 'Правила просты&nbsp;— за&nbsp;2 минуты дать максимальное количество правильных ответов.<br> На&nbsp;каждую мелодию всего 3 варианта ответа.<br> Удачи!'
        }
      }
    })
);
