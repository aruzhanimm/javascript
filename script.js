// Task 0: First Script
console.log("Student: [Your Full Name]");
console.log("Group: [Your Group]");

document.getElementById('showAlert').addEventListener('click', function() {
    alert("Hello, JavaScript World!");
});

// Task 1: Variables & Operators
document.getElementById('runVariablesDemo').addEventListener('click', function() {
    // Variable declarations
    const name = "John Doe";
    const age = 25;
    const isStudent = true;
    const height = 175.5;

    // Arithmetic operations
    const nextAge = age + 1;
    const halfAge = age / 2;
    const ageSquared = age * age;

    // String concatenation
    const greeting = "Hello, " + name + "!";
    const ageMessage = "Next year you will be " + nextAge + " years old.";

    // Display results
    const output = document.getElementById('variablesOutput');
    output.innerHTML = `
        <strong>Variable Declarations:</strong><br>
        name = "${name}" (string)<br>
        age = ${age} (number)<br>
        isStudent = ${isStudent} (boolean)<br>
        height = ${height} (number)<br><br>
        
        <strong>Arithmetic Operations:</strong><br>
        age + 1 = ${nextAge}<br>
        age / 2 = ${halfAge}<br>
        age * age = ${ageSquared}<br><br>
        
        <strong>String Concatenation:</strong><br>
        "${greeting}"<br>
        "${ageMessage}"
    `;
});

// Task 2: Changing Content
document.getElementById('changeParagraph').addEventListener('click', function() {
    const paragraph = document.getElementById('changeableParagraph');
    paragraph.textContent = "The paragraph text has been successfully changed! DOM manipulation is working!";
});

// Task 3: Changing Styles
document.getElementById('changeBgColor').addEventListener('click', function() {
    const box = document.getElementById('styleBox');
    const colors = [
        'linear-gradient(135deg, #1e3c72, #2a5298)',
        'linear-gradient(135deg, #ff7e5f, #feb47b)',
        'linear-gradient(135deg, #6a11cb, #2575fc)',
        'linear-gradient(135deg, #11998e, #38ef7d)'
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    box.style.background = randomColor;
});

document.getElementById('changeFontSize').addEventListener('click', function() {
    const box = document.getElementById('styleBox');
    const sizes = ['16px', '20px', '24px', '28px', '32px'];
    const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
    box.style.fontSize = randomSize;
});

// Task 4: Creating & Removing Elements
document.getElementById('addItem').addEventListener('click', function() {
    const list = document.getElementById('dynamicList');
    const newItem = document.createElement('li');
    newItem.textContent = `New item ${list.children.length + 1}`;
    list.appendChild(newItem);
});

document.getElementById('removeItem').addEventListener('click', function() {
    const list = document.getElementById('dynamicList');
    if (list.children.length > 0) {
        list.removeChild(list.lastChild);
    }
});

// Task 5: Mouse Events
const mouseBox = document.getElementById('mouseBox');
const originalBg = mouseBox.style.background;

mouseBox.addEventListener('mouseover', function() {
    this.style.background = 'linear-gradient(135deg, #ff7e5f, #feb47b)';
    this.textContent = 'Mouse is over me!';
});

mouseBox.addEventListener('mouseout', function() {
    this.style.background = originalBg;
    this.textContent = 'Hover over me!';
});

// Task 6: Keyboard Events
const keyboardInput = document.getElementById('keyboardInput');
const inputValue = document.getElementById('inputValue');

keyboardInput.addEventListener('keyup', function() {
    inputValue.textContent = this.value;
});

// Task 7: Form Validation
const validationForm = document.getElementById('validationForm');
const formError = document.getElementById('formError');

validationForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!name || !email || !password) {
        formError.textContent = "All fields are required!";
        return;
    }

    if (!isValidEmail(email)) {
        formError.textContent = "Please enter a valid email address!";
        return;
    }

    formError.textContent = "";
    alert("Form submitted successfully!");
    this.reset();
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Task 8: To-Do List App
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');
let tasks = []; // Array to store tasks

addTaskButton.addEventListener('click', function() {
    addTask();
});

taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Add task to array
    tasks.push({
        id: Date.now(),
        text: taskText,
        completed: false
    });

    // Update the UI
    renderTasks();

    // Clear input
    taskInput.value = "";
}

function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach(task => {
        const li = document.createElement('li');

        const taskText = document.createElement('span');
        taskText.textContent = task.text;
        taskText.className = task.completed ? 'completed' : '';
        taskText.addEventListener('click', function() {
            toggleTaskCompletion(task.id);
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            deleteTask(task.id);
        });

        li.appendChild(taskText);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}

function toggleTaskCompletion(taskId) {
    tasks = tasks.map(task => {
        if (task.id === taskId) {
            return { ...task, completed: !task.completed };
        }
        return task;
    });

    renderTasks();
}

function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    renderTasks();
}