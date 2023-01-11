const form = document.querySelector('form');
const taskInput = document.querySelector('#task-name');
let taskListUl = document.querySelector('#task-list');
let taskList = JSON.parse(localStorage.getItem('taskList')) || [];

if (taskList.length) {
    for(let task of taskList){
        //create a new <li> element
        const newTask = document.createElement('li');
        // set the text content to the task
        newTask.textContent = task;
        //append the <li> to the <ul>
        taskListUl.appendChild(newTask);

        const deleteButton = document.createElement('img');
        deleteButton.src = 'images/triforce-svgrepo-com.svg';
        deleteButton.alt = 'delete button';
        deleteButton.classList.add("delete-btn");
        newTask.appendChild(deleteButton);

        deleteButton.addEventListener('click', () => {
            taskList = taskList.filter((currentTask) => currentTask !== task);
            localStorage.setItem('taskList', JSON.stringify(taskList));
            taskListUl.removeChild(newTask);
        });
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskName = taskInput.value;
    if(!taskName) return;
    taskList.push(taskName);
    localStorage.setItem('taskList', JSON.stringify(taskList));

    const newTask = document.createElement('li');
    newTask.textContent = taskName;
    newTask.style.display = 'block';
    taskListUl.appendChild(newTask);
    const deleteButton = document.createElement('img');
    deleteButton.src = 'images/triforce-svgrepo-com.svg';
    deleteButton.alt = 'delete button';
    deleteButton.classList.add("delete-btn");
    newTask.appendChild(deleteButton);
    deleteButton.addEventListener('click', () => {
        taskList = taskList.filter((currentTask) => currentTask !== taskName);
        localStorage.setItem('taskList', JSON.stringify(taskList));
        taskListUl.removeChild(newTask);
    });
    
    taskInput.value = '';
    
});
    