import './style.css';

class Todos {
  todos = () => {
    const items = [
      {
        index: 1,
        description: 'programming todo list',
        completed: 'true',
      },
      {
        index: 2,
        description: 'Resolve todo list',
        completed: 'false',
      },
      {
        index: 3,
        description: 'Rearrange todo list',
        completed: 'false',
      },
    ];

    const todoContainer = document.querySelector('.todos-container');
    let ctivity = "   Todays todo's";
    items.map((oneTask) => {
      ctivity += `
      <ul class="ul-todo">
        <li class="li-list"><i class="icon"></i>${oneTask.index}</li>
        <li class="li-list">${oneTask.description}</li>
        <li class="li-list">${oneTask.completed}</li>
      </ul>
      `;
      return ctivity;
    });
    todoContainer.innerHTML = ctivity;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const todoList = new Todos();
  todoList.todos();
});
