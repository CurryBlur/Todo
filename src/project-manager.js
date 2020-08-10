import Project from './project'

class ProjectManager {
    constructor() {
        this.projects = []
    }

    addProject() {
        var newProject = new Project()
        this.projects.push(newProject)
        return newProject
    }

    removeProject(project) {
        if(this.projects.includes(project)){
            this.projects.splice(this.project.indexOf(project),1);
        }
    }
}