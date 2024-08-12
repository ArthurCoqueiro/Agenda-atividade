document.addEventListener('DOMContentLoaded', loadTask);
document.getElementById('taskForm').addEventListener('submit', function(e){
e.preventDefault();
addTask();
});

function loadTask(){
    const tasks = JSON.parse(localStorage.getItem('tasks'))||[];
    tasks.forEach(task => {
        renderTask(task.text, task.completed);
    });
}

function saveTask(){
    const tasks = [];
    document.querySelectorAll('#taskList li').forEach(listItem =>{
        const text = listItem.querySelector('label').textContent;
        const completed = listItem.classList.contains('completed');
        tasks.push({ text, completed});

    })
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTask(teskText, completed){
    //const taskList = document.getElementById('taskList');


}