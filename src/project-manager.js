import Project from './project'

class ProjectManager {
    constructor() {
        this.nextID = 0;
        this.projects = []
    }

    addProject() {
        var newProject = new Project(this.nextID);
        this.nextID += 1;
        this.projects.push(newProject);
        return newProject;
    }

    addSavedProject(project){
        this.projects.push(project);
    }

    removeProject(project) {
        if(this.projects.includes(project)){
            this.projects.splice(this.projects.indexOf(project),1);
        }
    }

    getProjByID(ID){
        let output = false;
        this.projects.forEach((project) => {
            if(project.ID == ID) {
                output = project;
            }
        })
        return output;
    }

    getIDByProj(proj){
        return proj.ID;
    }

    addToDo(project, todo){
        project.addToDo(todo)
    }

    updateToDo(project, oldToDo, newToDo){
        project.updateToDo(oldToDo, newToDo)
    }
}

export default ProjectManager;