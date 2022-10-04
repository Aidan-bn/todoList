/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkweb_pack"] = self["webpackChunkweb_pack"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// import './style.css';\n\nconst todoInput = document.getElementById('todo-input');\nconst form = document.querySelector('.todo-input');\nconst container = document.getElementById('todos-container');\nconst todoHolder = document.createElement('div');\n\n\n// local storage\nlet todo;\nconst todos = JSON.parse(localStorage.getItem('todos'));\n\nconst store = () => {\n  todo = {\n    description: todoInput.value,\n    id: todos.length + 1,\n    completed: false,\n  };\n\n  todos.push(todo);\n  localStorage.setItem('todos', JSON.stringify(todos));\n};\n\nconst addTasks = (todo) => {\n  const checkbox = document.createElement('input');\n  checkbox.type = 'checkbox';\n  checkbox.classList.add('checkbox');\n  const newInput = document.createElement('input');\n  newInput.type = 'text';\n  newInput.classList.add('newInput');\n  newInput.value = todo.description;\n  const icon = document.createElement('i');\n  icon.classList.add('fa-solid');\n  icon.classList.add('fa-trash');\n  icon.classList.add('dots');\n  todoHolder.append(checkbox, newInput, icon);\n  container.appendChild(todoHolder);\n};\n\ntodos.forEach(addTasks);\n\nfunction populate() {\n  form.addEventListener('keyup', (e) => {\n    e.keyup = 'Enter';\n    if (todoInput.value !== '') {\n      store();\n      addTasks(todo);\n    }\n  });\n}\n\n\n//# sourceURL=webpack://web-pack/./src/index.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);