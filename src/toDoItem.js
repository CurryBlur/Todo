class toDoItem {
    constructor (title, description = "", priority = "normal", ) {
        this.title = title
        this.description = description
        this.priority = priority
        this.tags = []
    }

    addTag(tag) {
        this.tags.push(tag)
    }

    removeTag(tag) {
        if(this.tags.includes(tag)){
            this.tags.splice(this.tags.indexOf(tag),1)
        }
    }
}