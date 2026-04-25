const headerTitle = document.querySelector('h1');
headerTitle.style.color = 'blue';

const tasks = document.querySelectorAll('.task');
tasks.forEach(task => task.classList.add('highlight'));

const actionBtn = document.getElementById('action-btn');
actionBtn.addEventListener('click', () => {
    const firstTask = document.querySelector('#todo-list .task');
    if (firstTask) {
        firstTask.textContent = 'Задание выполнено!';
    }
});

const addTaskBtn = document.getElementById('add-task-btn');
const newTaskInput = document.getElementById('new-task-input');
const todoList = document.getElementById('todo-list');

addTaskBtn.addEventListener('click', () => {
    const taskText = newTaskInput.value.trim();
    if (taskText !== '') {
        const newLi = document.createElement('li');
        newLi.className = 'task new-item';
        newLi.textContent = taskText;
        todoList.appendChild(newLi);
        newTaskInput.value = '';
    }
});

const removeLastBtn = document.getElementById('remove-last-btn');
removeLastBtn.addEventListener('click', () => {
    const lastTask = todoList.lastElementChild;
    if (lastTask) {
        console.log('Удаляем задачу:', lastTask.textContent);
        todoList.removeChild(lastTask);
    }
});

const toggleBtn = document.getElementById('toggle-btn');
const mainHeader = document.getElementById('main-header');

toggleBtn.addEventListener('click', () => {
    mainHeader.classList.toggle('hidden');
});

newTaskInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        addTaskBtn.click();
    }
});