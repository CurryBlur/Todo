import ProjectManager from './project-manager'
import Project from './project'
import ToDoItem from './to-do-item'

function saveProjects(projectManager){
    window.localStorage.setItem('project-next-id', projectManager.nextID);
    if(typeof projectManager.projects !== 'undefined' && projectManager.projects.length > 0){
        let projectsArray = [];
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
        console.log(projectsArray)
        window.localStorage.setItem('projects-array', JSON.stringify(projectsArray));
    } else {
        window.localStorage.removeItem('projects-array');
    }
}

function loadProjects() {
    let projectManager = new ProjectManager();
    if(window.localStorage.getItem('project-next-id') != null) {
        projectManager.nextID = parseInt(window.localStorage.getItem('project-next-id'));
        let projectsArray = JSON.parse(window.localStorage.getItem('projects-array'));
        console.log(projectsArray)
        if(projectsArray != null) {
            for(let i = 0; i < projectsArray.length; i++) {
                let projectArray = projectsArray[i];
                let newProj = new Project(projectArray[1], projectArray[0]);
                //iterate through todos
                if(projectArray.length >= 3) {
                    for(let j = 2; j < projectArray.length; j++) {
                        let newDate = "None";
                        if(projectArray[j][3] != "None"){
                            newDate = new Date(projectArray[j][3]).toLocaleDateString('en-US');
                        }
                        let newToDo = new ToDoItem(newProj, projectArray[j][0], projectArray[j][1], parseInt(projectArray[j][2]), newDate);
                        newToDo.completed = projectArray[j][4] == true;
                        newProj.addToDo(newToDo);
                    }
                }
                projectManager.addSavedProject(newProj);
            }
        }
    }
    return projectManager;
}

export { saveProjects, loadProjects }