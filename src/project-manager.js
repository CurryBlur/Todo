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

    removeProject(project) {
        if(this.projects.includes(project)){
            this.projects.splice(this.projects.indexOf(project),1);
        }
    }

    getProjByID(ID){
        let output = false;
        this.projects.forEach((project) => {
            console.log(project)
            console.log(ID)
            console.log(project.ID)
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
}

export default ProjectManager;