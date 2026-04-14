const themeToggleBtn = document.getElementById('theme-toggle');

// 1. Sprawdzamy przy uruchomieniu, czy użytkownik miał już włączony tryb ciemny
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggleBtn.textContent = '☀️'; // Zmieniamy ikonę na słońce
}

// 2. Nasłuchujemy kliknięcia w przycisk zmiany motywu
themeToggleBtn.addEventListener('click', () => {
    // Przełączamy klasę dark-mode na elemencie <body>
    document.body.classList.toggle('dark-mode');
    
    // Sprawdzamy, czy tryb ciemny jest teraz włączony i zapisujemy to
    if (document.body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = '☀️';
        localStorage.setItem('theme', 'dark'); // Zapis do pamięci przeglądarki
    } else {
        themeToggleBtn.textContent = '🌙';
        localStorage.setItem('theme', 'light'); // Zapis do pamięci przeglądarki
    }
});

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
        checkbox.addEventListener('change', () => {
            newLi.classList.toggle('completed');
        });

        const taskText = document.createElement('span');
        taskText.textContent = taskValue;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Usuń';
        deleteBtn.classList.add('delete-btn');
        
        deleteBtn.addEventListener('click', function() {
        
            newLi.remove();
        });


        newLi.appendChild(checkbox);
        newLi.appendChild(taskText);
        newLi.appendChild(deleteBtn);
        
        taskList.appendChild(newLi);
        
        taskInput.value = '';
        taskInput.focus();
    }
});