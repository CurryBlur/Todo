class ToDoItem {
    constructor (project, title, description = "", priority = 3, dueDate = null, tags = null) {
        this.project = project;
        this.title = title;
        this.description = description;
        this.priority = priority; // From 1 to 5, 5 being highest
        this.dueDate = dueDate;
        
        if(!tags){
            this.tags = [];
        } else {
            this.tags = tags;
        }
        
        this.completed = false;
    }

    addTag(tag) {
        this.tags.push(tag);
    }

    removeTag(tag) {
        if(this.tags.includes(tag)){
            this.tags.splice(this.tags.indexOf(tag),1);
        }
    }
}

export default ToDoItem;