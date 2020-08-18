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

    let newToDo = null;
    console.log(title.getAttribute('data-todo'))
    if(title.getAttribute('data-todo') != null)
    {
        newToDo = project.getToDo(title.getAttribute('data-todo'))   
    } else {
        newToDo = new ToDoItem(project, title.value, desc.value, priority.value, date.value ? date.value : "None");
        projectManager.addToDo(project, newToDo);
    }
    viewManager.addTodoView(project, newToDo);
    addToDoWindow.style.display = 'none';
    title.value = "";
    date.value = "";
    priority.value = "";
    desc.value = "";
    title.setAttribute('data-todo', null);
    let backgroundCover = document.querySelector('#background-cover');
    backgroundCover.style.backgroundColor = 'rgba(0, 0, 0, 0)';
});

