let todos = JSON.parse(localStorage.getItem('todos')) || [];

const removeTask = (id) => {
  todos = todos.filter((tasks) => tasks.id !== id);
  todos.forEach((todo, id) => {
    todo.id = id + 1;
  });
  localStorage.setItem('todos', JSON.stringify(todos));
};

export default removeTask;
