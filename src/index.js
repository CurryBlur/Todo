import ToDoItem from './to-do-item'

var item1 = new ToDoItem("Do the stuff", "Lots of it")
console.log(item1.title)
item1.addTag("fun")
console.log(item1.tags)
item1.removeTag("fun")
console.log(item1.tags)