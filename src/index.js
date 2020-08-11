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
    console.log(addToDoWindow.getAttribute('data-proj'))
    console.log(projectManager.getProjByID(0))

    let title = document.querySelector('#title');
    let date = document.querySelector('#date');
    let priority = document.querySelector('#priority');
    let desc = document.querySelector('#desc');
    console.log(title, date, priority, desc)

    let newToDo = new ToDoItem(project, title.value, desc.value, priority.value, desc.value);
    console.log(project)
    projectManager.addToDo(project, newToDo);
    viewManager.addTodoView(project, newToDo);
    addToDoWindow.style.display = 'none';
    title.value = "";
    date.value = "";
    priority.value = "";
    desc.value = "";
});


