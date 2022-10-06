import { todoInput, form, clearButton } from './declaration.js';

// l
let todos = [];
let todo;

const saveTolocalStorage = () => {
  const allTodos = JSON.stringify(todos);
  localStorage.setItem('todos', allTodos);
};

const getFromLocalStorage = () => {
  todos = JSON.parse(localStorage.getItem('todos')) || [];
};

function store() {
  todo = {
    description: todoInput.value,
    id: todos.length + 1,
    completed: false,
  };

  todos.push(todo);
  saveTolocalStorage();
}

const clear = () => {
  todoInput.value = '';
};

const removeTask = (id) => {
  todos = todos.filter((tasks) => tasks.id !== id);
  todos.forEach((todo, id) => {
    todo.id = id + 1;
  });
  saveTolocalStorage();
};

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

  const saveTolocalStorage = () => {
    const allTodos = JSON.stringify(todos);
    localStorage.setItem('todos', allTodos);
  };

  const completedTodo = (stats, index) => {
    todos[index - 1].completed = stats;
    saveTolocalStorage();
  };
 
  checkbox.onclick = (e) => {
    completedTodo(e.target.checked, todo.id);

    if (todo.completed === true) {
      newInput.classList.add('completed');
    } else {
      newInput.classList.remove('completed');
    }
  };

  if (todo.completed === true) {
    checkbox.checked = 'checked';
    newInput.classList.add('completed');
  }

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

const populateTasks = () => {
  if (localStorage.getItem('todos')) {
    getFromLocalStorage();
    todos.map((task) => {
      addTasks(task);
      return task;
    });
  } else {
    todos.map((task) => {
      addTasks(task);
      return task;
    });
  }
};

const clearCompleted = () => {
  todos = todos.filter((task) => task.completed !== true);
  todos.forEach((todo, id) => {
    todo.id = id + 1;
  });
  saveTolocalStorage();
};

clearButton.addEventListener('click', clearCompleted);

export {
  display, modifyItem, populateTasks, clearCompleted, removeTask,
};
