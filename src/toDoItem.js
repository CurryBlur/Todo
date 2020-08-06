class toDoItem {
    constructor (title, description = "", priority = 3, dueDate = null, tags = []) {
        this.title = title;
        this.description = description;
        this.priority = priority; // From 1 to 5, 5 being highest
        this.dueDate = dueDate;
        this.tags = tags;
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

export default toDoItem;