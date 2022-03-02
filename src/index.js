document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('#create-task-form');
  form.addEventListener('submit', handleSubmit);
});

function handleSubmit(e) {
  e.preventDefault();
  const list = document.querySelector('#tasks');
  const task = document.createElement('li');
  const description = document.querySelector('#new-task-description').value;
  task.innerText = description;

  const taskButton = document.createElement('button');
  taskButton.setAttribute('data-description', description);
  taskButton.innerText = 'X';

  task.append(taskButton);
  list.append(task);

  taskButton.addEventListener('click', () => task.remove());

  e.target.reset();
}

