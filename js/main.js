import Manager from './modules/manager';
import data from './data-questions';

const manager = new Manager(data);
manager.start();
