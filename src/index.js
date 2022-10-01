import './style.css';
import addTask  from './modules/addList';
import remove from '.modules/removeItem.js';
import declaration, { todoTask } from './modules/declaration.js';

document.addEventListener('DOMContentLoaded', () => {
  const todoList = new Todos();
  todoList.todos();
});

todoTask.addEventListener('enter', (e) => {
  if(e.key === 'Enter') {
    addList();
    todoTask.value = '';
  }
});