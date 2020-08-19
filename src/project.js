class Project {
    constructor (ID, title = "", todos = []) {
        this.title = title;
        this.todos = todos;
        this.ID = ID;
    }

    addToDo(todo) {
        this.todos.push(todo);
    }

    deleteToDo(todo) {
        console.log(todo);
        console.log(this.todos.includes(todo));
        if(this.todos.includes(todo)){
            this.todos.splice(this.todos.indexOf(todo),1);
        }
    }

    getToDo(todoTitle) {
        for(let i = 0; i < this.todos.length; i++){
            if(this.todos[i].title == todoTitle){
                return this.todos[i];
            }
        }
        return false;
    }

    updateToDo(oldToDo, newtodo){
        oldToDo.title = newtodo.title;
        oldToDo.description = newtodo.description;
        oldToDo.priority = newtodo.priority;
        oldToDo.dueDate = newtodo.dueDate;
    }
}

export default Project;