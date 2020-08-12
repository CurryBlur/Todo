import ToDoItem from './to-do-item'
import ProjectManager from './project-manager'
import ViewManager from './view-manager'

const projectManager = new ProjectManager();
const viewManager = new ViewManager(projectManager);

//add new project button event listener
document.querySelector('#new-project-button').addEventListener('click', () => {
    let proj = projectManager.addProject();
    viewManager.addProjectView(proj)
});

document.querySelector('#add-to-do-button').addEventListener('click', () => {
    //gather inputs from form, then call
    let addToDoWindow = document.querySelector('#add-todo');
    let project = projectManager.getProjByID(parseInt(addToDoWindow.getAttribute('data-proj')))

    let title = document.querySelector('#title');
    let date = document.querySelector('#date');
    let priority = document.querySelector('#priority');
    let desc = document.querySelector('#desc');
    console.log(title.value, date.value, priority.value, desc.value)

    let newToDo = new ToDoItem(project, title.value, desc.value, priority.value, desc.value);
    projectManager.addToDo(project, newToDo);
    viewManager.addTodoView(project, newToDo);
    addToDoWindow.style.display = 'none';
    title.value = "";
    date.value = "";
    priority.value = "";
    desc.value = "";
    let backgroundCover = document.querySelector('#background-cover');
    backgroundCover.style.backgroundColor = 'rgba(0, 0, 0, 0)';
});

