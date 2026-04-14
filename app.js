const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

addTaskBtn.addEventListener('click', function() {
    const taskValue = taskInput.value.trim();

    if (taskValue !== '') {
       
        const newLi = document.createElement('li');
        
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('task-checkbox');
        
       
        const taskText = document.createElement('span');
        taskText.textContent = taskValue;
        

        checkbox.addEventListener('change', function() {
           
            newLi.classList.toggle('completed');
        });
        
      
        newLi.appendChild(checkbox);
        newLi.appendChild(taskText);
        

        taskList.appendChild(newLi);
        
        taskInput.value = '';
        taskInput.focus();
    } else {
        console.warn('Pole tekstowe jest puste. Wpisz treść zadania.');
    }
});