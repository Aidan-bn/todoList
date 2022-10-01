import preview from './preview.js';
import declaration, { todoTask } from './declaration.js';

const todo = () => {
  let tasks = [];
  const task = todoTask.value;
  let tasksection = '';
  //const tasksection = document.querySelector('.todos-container');
  const newArray.length = JSON.parse(localStorage.getItem('Orodha'));
  const index = newArray.length;

  if(localStorage.getItem('Orodha')) === null {
      task.push({index, description: task, completed: false});
      localStorage.setItem('Orodha', JSON.stringify(task));
  } else {
      task = JSON.parse(localStorage.getItem('Orodha'));
      task.push({index, description: task, completed: false });
      localStorage.setItem('Orodha', JSON.stringify(task));
  }
  tasksection = '';
  tasksection.innerHTML = tasksection;

}

export default todo;
