import './style.css';

// const textInput = document.querySelector('input');
// const todosMainContainer = document.querySelector('.todos-container');

// class Object {
//   constructor(description, completed, index) {
//     this.description = description;
//     this.completed = completed;
//     this.index = index;
//   }
// }

// // array which will collect objects contents and post them into the localstorage
// const myArray = [];

// const addTodo = (todoValue) => {
//   const todoContainer = document.createElement('div');
//   todoContainer.className = 'toDoDivision';
//   todoContainer.innerHTML += `
//         <input type="checkbox" class="checkbox">
//         <span class="todo-vakue">${todoValue}</span>
//         `;
//   // place contaneer to the required place
//   todosMainContainer.appendChild(todoContainer);

//   const checkbox = document.querySelectorAll('.checkbox');
//   checkbox.forEach((i) => {
//     i.addEventListener('click', () => {
//       i.parentElement.classList.toggle('marked');
//       i.nextElementSibling.classList.toggle('cross-over');
//       i.parentElement.lastElementChild.classList.toggle('remove');
//       i.parentElement.lastElementChild.previousElementSibling.classList.toggle('disabled');
//     });
//   });

//   // add to local storage
//   const MyObject = new Object(todoValue, false, checkbox.length - 1);
//   myArray.push(MyObject);
//   localStorage.setItem('mpango', JSON.stringify(myArray));

//   const retype = document.querySelectorAll('.line');
//   retype.forEach((i) => {
//     i.addEventListener('click', () => {
//       editTodo(todoContainer, i.previousElementSibling);
//     });
//   });

//   const deleteIcon = document.querySelectorAll('.cross');
//   deleteIcon.forEach((i) => {
//     i.addEventListener('click', () => {
//       removeTodo(i.parentElement);
//     });
//   });
// };

// const removeTodo = (todo) => {
//   todosMainContainer.removeChild(todo);
//   let count = 0;
//   const localData = JSON.parse(localStorage.getItem('mpango'));
//   const data = Array.from(localData).filter((i) => i.completed);
//   data.map((i) => i.index = count += 1);
//   localStorage.setItem('mpango', JSON.stringify(data));
// };

// const editTodo = (todoContainer, newTodo) => {
//   const update = document.createElement('input');
//   update.type = 'text';
//   update.className = 'update';
//   update.value = newTodo.textContent;
//   todoContainer.replaceChild(update, newTodo);
//   update.addEventListener('keypress', (e) => {
//     if (e.key === 'Enter') {
//       const todoContainers = document.querySelectorAll('.todoContainer');
//       const localData = JSON.parse(localStorage.getItem('mpango'));
//       for (let i = 0; i < todoContainers.length; i += 1) {
//         if (todoContainers[i].classList.contains('marked')) {
//           localData[i].description = update.value;
//           localStorage.setItem('mpango', JSON.stringify('marked'));
//         }
//       }
//       update.parentElement.classList.remove('marked');
//       todoContainer.replaceChild(newTodo, update);
//       newTodo.textContent = update.value;
//     }
//   });
// };

// textInput.addEventListener('keypress', (e) => {
//   if (e.key === 'Enter' && textInput.value) {
//     addTodo(textInput.value);
//     textInput.value = null;
//   }
// });

// const getFromLocal = () => {
//   const data = JSON.parse(localStorage.getItem('mpango'));
//   data.map((i) => {
//     myArray.push(i);
//     const todoContainer = document.createElement('div');
//     todoContainer.className = 'toDoDivision';
//     todoContainer.innerHTML += `
//     <input type="checkbox" class="checkbox">
//     <span class="todo-vakue">${i.description}</span>
//     <span class="material-symbols-outlined">more_vert</span>
//         `;
   
//     todosMainContainer.appendChild(todoContainer);
//     const retype = document.querySelectorAll('.line');
//     retype.forEach((i) => {
//       i.addEventListener('click', () => {
//         editTodo(todoContainer, i.previousElementSibling);
//       });
//     });
//   });
//   const checkbox = document.querySelectorAll('.checkbox');
//   checkbox.forEach((i) => {
//     i.addEventListener('click', () => {
//       i.parentElement.classList.toggle('marked');
//       i.nextElementSibling.classList.toggle('cross-over');
//       i.parentElement.lastElementChild.classList.toggle('remove');
//       i.parentElement.lastElementChild.previousElementSibling.classList.toggle('line');
//     });
//   });
//   const deleteIcon = document.querySelectorAll('.cross');
//   deleteIcon.forEach((i) => {
//     i.addEventListener('click', () => {
//       removeTodo(i.parentElement);
//     });
//   });

//   localStorage.setItem('mpango', JSON.stringify(myArray));
// };

// window.addEventListener('load', getFromLocal);

// const updatStore = () => {
//   const localData = JSON.parse(localStorage.getItem('mpango'));
//   const todos = document.querySelectorAll('span');
//   for (let i = 0; i < todos.length; i += 1) {
//     if (todos[i].classList.contains('marked')) {
//       localData[i].completed = true;
//     } else {
//       localData[i].completed = false;
//     }
//   }
// };

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