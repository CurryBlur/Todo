class ViewManager {
    constructor() {
    }

    addProjectView(project) {
        let projectsDiv = document.querySelector('#projects');
        projectsDiv.setAttribute('data-proj', project)

        //add Project name input
        let newInput = document.createElement('input');
        newInput.classList.add('project-name');
        newInput.type = 'text';
        newInput.placeholder = 'Project name';
        projectsDiv.append(newInput)

        //add button to add new item to 
        //add event listener for updating title, to update projects title in js
        let newButton = document.createElement('button');
        
        <p class="add-new-item">+ Add new item </p>
    }

    updateProjectName(project, name){

    }
    removeProjectView() {

    }
}