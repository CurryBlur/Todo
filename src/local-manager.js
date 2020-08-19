import ProjectManager from './project-manager'
import Project from './project'
import ToDoItem from './to-do-item'

function saveProjects(projectManager){
    localStorage.setItem('project-next-id', projectManager.nextID);
    let projectsArray = [];
    if(projectManager.projects != null){
        for(let i = 0; i < projectManager.projects.length; i++){
            let project = projectManager.projects[i];
            let projectArray = [];
            projectArray.push(project.title);
            projectArray.push(project.ID);
            if(project.todos != null) {
                for(let j = 0; j < project.todos.length; j++) {
                    let todo = project.todos[j];
                    let todoArray = [];
                    todoArray.push(todo.title);
                    todoArray.push(todo.description);
                    todoArray.push(todo.priority);
                    todoArray.push(todo.dueDate);
                    todoArray.push(todo.completed);
                    projectArray.push(todoArray);
                }  
            }
            projectsArray.push(projectArray);
        }
    }
    localStorage.setItem('projects-array', JSON.stringify(projectsArray))
}

function loadProjects() {
    let projectManager = new ProjectManager();
    if(localStorage.getItem('project-next-id') != null) {
        projectManager.nextID = parseInt(localStorage.getItem('project-next-id'));
        let projectsArray = JSON.parse(localStorage.getItem('project-array'));
        if(projectsArray != null) {
            for(let i = 0; i < projectsArray.length; i++) {
                let projectArray = projectsArray[i];
                let newProj = new Project(projectArray[1], projectArray[0]);
                //iterate through todos
                if(projectArray.length >= 3) {
                    for(let j = 2; j < projectArray.length; j++) {
                        let newToDo = new ToDoItem(newProj, projectArray[j][0], projectArray[j][1], projectArray[j][3],projectArray[j][4]);
                        newToDo.completed = projectArray[j][5] == "true";
                        newProj.addToDo(newToDo)
                    }
                }
                projectManager.addSavedProject(newProj);
            }
        }
    }
    return projectManager;
}

export { saveProjects, loadProjects }