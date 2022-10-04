import removeTask from './removeItem.js';

const todos = JSON.parse(localStorage.getItem('todos')) || [];

const addTasks = (todo) => {
  const container = document.getElementById('todos-container');
  const todoHolder = document.createElement('div');
  todoHolder.classList.add('todoActivity');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('checkbox');
  const newInput = document.createElement('input');
  newInput.type = 'text';
  newInput.classList.add('newInput');
  newInput.value = todo.description;
  const icon = document.createElement('i');
  icon.classList.add('fa-solid');
  icon.classList.add('fa-trash');
  icon.classList.add('dots');
  todoHolder.append(checkbox, newInput, icon);
  container.append(todoHolder);
  // delete activity
  icon.addEventListener('click', () => {
    // ev.preventDefault();
    icon.parentElement.remove();
    removeTask(todo.id);
  });
};

todos.forEach(addTasks);

export default addTasks;
