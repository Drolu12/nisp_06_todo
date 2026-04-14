
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

addTaskBtn.addEventListener('click', function() {
    

    const taskValue = taskInput.value.trim();

    if (taskValue !== '') {
        
        const newLi = document.createElement('li');

        newLi.textContent = taskValue;

        taskList.appendChild(newLi);

        taskInput.value = '';
        
        taskInput.focus();
        
    } else {
        console.warn('Pole tekstowe jest puste. Wpisz treść zadania.');
    }
});