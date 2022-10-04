import { todoInput, form } from './declaration.js';
import addTasks from './insert.js';

// local storage
let todo;
const todos = JSON.parse(localStorage.getItem('todos')) || [];

function store() {
  todo = {
    description: todoInput.value,
    id: todos.length + 1,
    completed: false,
  };

  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
}

const clear = () => {
  todoInput.value = '';
};

const modifyItem = () => {
  const updateTodo = document.querySelectorAll('.newInput');
  updateTodo.forEach((edits, indexy) => {
    edits.addEventListener('change', () => {
      todos.forEach((todo, index) => {
        if (indexy === index) {
          todo.Description = edits.value;
          localStorage.setItem('todos', JSON.stringify(todos));
        }
      });
    });
  });
};
modifyItem();

const display = () => {
  form.addEventListener('keydown', (e) => {
    if (todoInput.value !== '' && e.key === 'Enter') {
      store();
      addTasks(todo);
      clear();
    }
  });
};

display();

export { display, modifyItem };
