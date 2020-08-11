import ProjectManager from "./project-manager";
import ToDoItem from './to-do-item'

class ViewManager {
    constructor(projectManager){
        this.projectManager = projectManager;
        this.projectsDiv = document.querySelector('#projects');
    }

    addProjectView(project) {
        let projectCard = this.createProjectCard(project)

        //add Project name input
        projectCard.append(this.createProjectNameInput(project));

        //add trash icon to remove card
        projectCard.append(this.createProjectTrashIcon(project, projectCard));

        //add button to add new item to 
        projectCard.append(this.createAddItemButton(project));
        this.projectsDiv.append(projectCard);

    }

    createProjectCard(project) {
        let projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        projectCard.setAttribute('data-proj', this.projectManager.getIDByProj(project));
        return projectCard;
    }

    createProjectNameInput(project){
        let newInput = document.createElement('input');
        newInput.classList.add('project-name');
        newInput.type = 'text';
        newInput.placeholder = 'Project name';
        
        //add event listener for updating title, to update projects title in js
        newInput.addEventListener('input', function() {
            project.title = this.value;
        })

        return newInput;
    }

    createProjectTrashIcon(project, projectCard) {
        let projectTrash = document.createElement('i');
        projectTrash.classList.add('fas');
        projectTrash.classList.add('fa-trash-alt');
        
        projectTrash.addEventListener('click', () => {
            this.projectManager.removeProject(project);
            this.projectsDiv.removeChild(projectCard)
        })
        return projectTrash;
    }

    createAddItemButton(project) {
        let newButton = document.createElement('button');
        newButton.classList.add('add-new-item');
        newButton.classList.add('form-elem');
        newButton.textContent = '+ Add new item';

        let viewMan = this;

        newButton.addEventListener('click', function(){
            //open window to create new ToDoItem
            viewMan.openToDoCreator(project);

            //return todoItem info

            //add todo line to text
            
        });

        return newButton;
    }

    addTodoView(project, newtodo) {
        //find which card has that project
        let projectID = this.projectManager.getIDByProj(project);
        document.querySelectorAll('.project-card').forEach((card) =>{
            if(card.getAttribute('data-proj') == projectID) {
                let addItemButton = card.lastChild;
                let newToDoDiv = document.createElement('div');
                newToDoDiv.classList.add('todo-basic')
                newToDoDiv.setAttribute('data-todo',newtodo)
                let newToDoI = document.createElement('i');
                newToDoI.classList.add('far');
                newToDoI.classList.add('fa-circle');
                let newToDoInp = document.createElement('input');
                newToDoInp.classList.add('unchecked');
                newToDoInp.classList.add('project-name');
                newToDoInp.value=newtodo.title;
                let newToDoEdit = document.createElement('i');
                newToDoEdit.classList.add('far');
                newToDoEdit.classList.add('fa-edit');
                newToDoDiv.appendChild(newToDoI);
                newToDoDiv.appendChild(newToDoInp);
                newToDoDiv.appendChild(newToDoEdit)
                card.insertBefore(newToDoDiv,addItemButton);
            }
        });
    }

    openToDoCreator(project){
        let addToDoWindow = document.querySelector('#add-todo');
        addToDoWindow.style.display = 'block'
        addToDoWindow.setAttribute('data-proj', this.projectManager.getIDByProj(project))
    }
}

export default ViewManager;