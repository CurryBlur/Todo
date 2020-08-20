import ToDoItem from './to-do-item'
import ProjectManager from './project-manager'
import ViewManager from './view-manager'
import { saveProjects, loadProjects } from './local-manager'

let projectManager = loadProjects();
/*
if (localStorage.getItem('project-manager') !== null) {
    projectManager = JSON.parse(localStorage.getItem('project-manager'));
    console.log(projectManager.projects);
}*/

const viewManager = new ViewManager(projectManager);

viewManager.updateDisplay();

//add new project button event listener
document.querySelector('#new-project-button').addEventListener('click', () => {
    let proj = projectManager.addProject();
    viewManager.addProjectView(proj)
    saveProjects(projectManager);
});

document.querySelector('#add-to-do-button').addEventListener('click', () => {
    //gather inputs from form, then call
    let addToDoWindow = document.querySelector('#add-todo');
    let project = projectManager.getProjByID(parseInt(addToDoWindow.getAttribute('data-proj')))
    
    let title = document.querySelector('#title');
    let date = document.querySelector('#date');
    let priority = document.querySelector('#priority');
    let desc = document.querySelector('#desc');

    let newToDo = null;
    if(title.hasAttribute('data-todo'))
    {
        let oldToDo = project.getToDo(title.getAttribute('data-todo'))
        newToDo = new ToDoItem(project, title.value, desc.value, priority.value, date.value ? new Date(date.value).toLocaleDateString('en-US') : "None");
        projectManager.updateToDo(project, oldToDo, newToDo);
        viewManager.updateDisplay();
    } else {
        newToDo = new ToDoItem(project, title.value, desc.value, priority.value, date.value ? new Date(date.value).toLocaleDateString('en-US') : "None");
        projectManager.addToDo(project, newToDo);
        viewManager.updateDisplay();
    }
    //viewManager.addTodoView(project, newToDo);
    addToDoWindow.style.display = 'none';
    title.value = "";
    date.value = "";
    priority.value = "";
    desc.value = "";
    if(title.hasAttribute('data-todo')) {
     title.removeAttribute('data-todo');
    }
    let backgroundCover = document.querySelector('#background-cover');
    backgroundCover.style.backgroundColor = 'rgba(0, 0, 0, 0)';

    let formTitle = document.querySelector('#form-title');
    formTitle.textContent = "Add a todo item";
    saveProjects(projectManager);
});
