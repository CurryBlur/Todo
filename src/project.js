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
        if(this.todos.includes(todo)){
            this.todos.splice(this.todos.indexOf(todo),1);
        }
    }

    getToDo(todoTitle) {
        this.todos.forEach( function(todoitem) {
            if (todoitem.title === todoTitle) {
                return todoitem;
            }
        })
        return false;
    }
}

export default Project;