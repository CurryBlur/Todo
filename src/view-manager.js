import ProjectManager from "./project-manager";
import ToDoItem from './to-do-item'
import { saveProjects, loadProjects } from './local-manager'

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
                // find new item button, add before that
                let addItemButton = card.lastChild;

                //set up overall todoiv
                let newToDoDiv = document.createElement('div');
                newToDoDiv.classList.add('todo-basic')
                newToDoDiv.setAttribute('data-todo', newtodo)

                this.addToDoLine(newToDoDiv, newtodo);
                
                card.insertBefore(newToDoDiv,addItemButton);
            }
        });
    }

    openToDoCreator(project){
        let addToDoWindow = document.querySelector('#add-todo');
        addToDoWindow.style.display = 'block'
        addToDoWindow.setAttribute('data-proj', this.projectManager.getIDByProj(project))
        let backgroundCover = document.querySelector('#background-cover');
        backgroundCover.style.backgroundColor = 'rgba(0, 0, 0, .5)';
    }

    editToDo(todo, project) {
        console.log(todo);
        let title = document.querySelector('#title');
        let date = document.querySelector('#date');
        let priority = document.querySelector('#priority');
        let desc = document.querySelector('#desc');
        let formTitle = document.querySelector('#form-title');

        formTitle.textContent = "Edit todo item";
        title.setAttribute('data-todo', todo.title);
        title.value = todo.title;
        date.value = todo.dueDate;
        priority.value = todo.priority;
        desc.value = todo.description;

        this.openToDoCreator(project);
    }

    getPriority(num) {
        switch(num) {
            case 5: 
                return "Highest";
                break;
            case 4:
                return "High";
            case 3:
                return "Medium";
            case 2:
                return "Low";
            case 1:
                return "Lowest";
            default:
                return "Medium";
        }
    }

    addToDoLine(newToDoDiv, newtodo) {
        // add clickable icon to check/uncheck
        let newToDoI = document.createElement('i');
        newToDoI.classList.add('far');
        if(newtodo.completed){
            newToDoI.classList.add('fa-check-circle');
        } else {
            newToDoI.classList.add('fa-circle');
        }

        newToDoI.addEventListener(('click'), (target) => {
            let icon = target.currentTarget;
            let toDoInput = target.currentTarget.nextElementSibling;

            if(icon.classList.contains('fa-circle')) {
                icon.classList.remove('fa-circle');
                icon.classList.add('fa-check-circle');
                toDoInput.classList.add('checked');
                toDoInput.classList.remove('unchecked');
                newtodo.toggleComplete();
            } else {
                icon.classList.remove('fa-check-circle');
                icon.classList.add('fa-circle');
                toDoInput.classList.add('unchecked');
                toDoInput.classList.remove('checked');
                newtodo.toggleComplete();
            }
        })

        //add input for text, changing it updates todo title
        let newToDoInp = document.createElement('input');
        if(newtodo.completed){
            newToDoInp.classList.add('checked');
        } else {
            newToDoInp.classList.add('unchecked');
        }
        newToDoInp.classList.add('todo-title-input')
        newToDoInp.value = newtodo.title;

        //add p elements for due date and priority
        let newDueDate = document.createElement('p');
        newDueDate.classList.add('due-date');
        newDueDate.textContent = "Due date: " + newtodo.dueDate;


        //priority
        let newPriority = document.createElement('p');
        newPriority.classList.add('priority');
        let priorityText = this.getPriority(parseInt(newtodo.priority));
        newPriority.textContent = "Priority: " + priorityText;

        let proman = this.projectManager;
        newToDoInp.addEventListener(('input'), function(evt){
            let todoElement = evt.target;
            newtodo.title = todoElement.value;
        });

        // add edit link, clinking it allows you to edit with add tab
        let newToDoEdit = document.createElement('i');
        newToDoEdit.classList.add('far');
        newToDoEdit.classList.add('fa-edit');

        let viewMan = this;
        newToDoEdit.addEventListener('click', function(evt) {
            viewMan.editToDo(newtodo, newtodo.project)
        });

        //append items to passed in Div
        newToDoDiv.appendChild(newToDoI);
        newToDoDiv.appendChild(newToDoInp);
        newToDoDiv.appendChild(newDueDate);
        newToDoDiv.appendChild(newPriority);
        newToDoDiv.appendChild(newToDoEdit);
    }

    updateDisplay(){
        while (this.projectsDiv.firstChild){
            this.projectsDiv.removeChild(this.projectsDiv.firstChild)
        }
        if(this.projectManager.projects.length > 0){
            this.projectManager.projects.forEach((project) => {
                this.addProjectView(project);
                project.todos.forEach((todo) => {
                    this.addTodoView(project, todo);
                })
            })
        }
        saveProjects(this.projectManager);
    }
}

export default ViewManager;