class Project {
    constructor (title, description = "", todos = []) {
        this.title = title;
        this.description = description;
        this.todos = todos;
    }

    addToDo(todo) {
        this.todos.push(todo);
    }

    deleteToDo(todo) {
        if(this.todos.includes(todo)){
            this.todos.splice(this.todos.indexOf(todo),1);
        }
    }
}

export default Project;