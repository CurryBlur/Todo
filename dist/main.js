!function(e){var t={};function r(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,r),c.l=!0,c.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)r.d(o,c,function(t){return e[t]}.bind(null,c));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);var o=class{constructor(e,t,r="",o=3,c="none",a=null){this.project=e,this.title=t,this.description=r,this.priority=o,this.dueDate=c,this.tags=a||[],this.completed=!1}addTag(e){this.tags.push(e)}removeTag(e){this.tags.includes(e)&&this.tags.splice(this.tags.indexOf(e),1)}toggleComplete(){this.completed=!this.completed}};var c=class{constructor(e,t="",r=[]){this.title=t,this.todos=r,this.ID=e}addToDo(e){this.todos.push(e)}deleteToDo(e){this.todos.includes(e)&&this.todos.splice(this.todos.indexOf(e),1)}getToDo(e){return this.todos.forEach((function(t){if(t.title===e)return t})),!1}};var a=class{constructor(){this.nextID=0,this.projects=[]}addProject(){var e=new c(this.nextID);return this.nextID+=1,this.projects.push(e),e}removeProject(e){this.projects.includes(e)&&this.projects.splice(this.projects.indexOf(e),1)}getProjByID(e){let t=!1;return this.projects.forEach(r=>{r.ID==e&&(t=r)}),t}getIDByProj(e){return e.ID}addToDo(e,t){e.addToDo(t)}};var d=class{constructor(e){this.projectManager=e,this.projectsDiv=document.querySelector("#projects")}addProjectView(e){let t=this.createProjectCard(e);t.append(this.createProjectNameInput(e)),t.append(this.createProjectTrashIcon(e,t)),t.append(this.createAddItemButton(e)),this.projectsDiv.append(t)}createProjectCard(e){let t=document.createElement("div");return t.classList.add("project-card"),t.setAttribute("data-proj",this.projectManager.getIDByProj(e)),t}createProjectNameInput(e){let t=document.createElement("input");return t.classList.add("project-name"),t.type="text",t.placeholder="Project name",t.addEventListener("input",(function(){e.title=this.value})),t}createProjectTrashIcon(e,t){let r=document.createElement("i");return r.classList.add("fas"),r.classList.add("fa-trash-alt"),r.addEventListener("click",()=>{this.projectManager.removeProject(e),this.projectsDiv.removeChild(t)}),r}createAddItemButton(e){let t=document.createElement("button");t.classList.add("add-new-item"),t.classList.add("form-elem"),t.textContent="+ Add new item";let r=this;return t.addEventListener("click",(function(){r.openToDoCreator(e)})),t}addTodoView(e,t){let r=this.projectManager.getIDByProj(e);document.querySelectorAll(".project-card").forEach(e=>{if(e.getAttribute("data-proj")==r){let r=e.lastChild,o=document.createElement("div");o.classList.add("todo-basic"),o.setAttribute("data-todo",t),this.addToDoLine(o,t),e.insertBefore(o,r)}})}openToDoCreator(e){let t=document.querySelector("#add-todo");t.style.display="block",t.setAttribute("data-proj",this.projectManager.getIDByProj(e)),document.querySelector("#background-cover").style.backgroundColor="rgba(0, 0, 0, .5)"}editToDo(e,t){let r=document.querySelector("#title"),o=document.querySelector("#date"),c=document.querySelector("#priority"),a=document.querySelector("#desc");r.setAttribute("data-todo",e.title),r.value=e.title,o.value=e.date,c.value=e.priority,a.value=e.desc,this.openToDoCreator(t)}getPriority(e){switch(e){case 5:return"Highest";case 4:return"High";case 3:return"Medium";case 2:return"Low";case 1:return"Lowest";default:return"Medium"}}addToDoLine(e,t){let r=document.createElement("i");r.classList.add("far"),r.classList.add("fa-circle"),r.addEventListener("click",e=>{let r=e.currentTarget,o=e.currentTarget.nextElementSibling;r.classList.contains("fa-circle")?(r.classList.remove("fa-circle"),r.classList.add("fa-check-circle"),o.classList.add("checked"),o.classList.remove("unchecked"),t.toggleComplete()):(r.classList.remove("fa-check-circle"),r.classList.add("fa-circle"),o.classList.add("unchecked"),o.classList.remove("checked"),t.toggleComplete())});let o=document.createElement("input");o.classList.add("unchecked"),o.classList.add("todo-title-input"),o.value=t.title;let c=document.createElement("p");c.classList.add("due-date"),c.textContent="Due date: "+t.dueDate;let a=document.createElement("p");a.classList.add("priority");let d=this.getPriority(parseInt(t.priority));a.textContent="Priority: "+d;let s=this.projectManager;o.addEventListener("input",(function(e){console.log(e);let r=e.target;t.title=r.value,console.log(t),console.log(s.projects)}));let i=document.createElement("i");i.classList.add("far"),i.classList.add("fa-edit");let n=this;i.addEventListener("click",(function(e){n.editToDo(t,t.project)})),e.appendChild(r),e.appendChild(o),e.appendChild(c),e.appendChild(a),e.appendChild(i)}};const s=new a,i=new d(s);document.querySelector("#new-project-button").addEventListener("click",()=>{let e=s.addProject();i.addProjectView(e)}),document.querySelector("#add-to-do-button").addEventListener("click",()=>{let e=document.querySelector("#add-todo"),t=s.getProjByID(parseInt(e.getAttribute("data-proj"))),r=document.querySelector("#title"),c=document.querySelector("#date"),a=document.querySelector("#priority"),d=document.querySelector("#desc"),n=null;console.log(r.getAttribute("data-todo")),null!=r.getAttribute("data-todo")?n=t.getToDo(r.getAttribute("data-todo")):(n=new o(t,r.value,d.value,a.value,c.value?c.value:"None"),s.addToDo(t,n)),i.addTodoView(t,n),e.style.display="none",r.value="",c.value="",a.value="",d.value="",r.setAttribute("data-todo",null),document.querySelector("#background-cover").style.backgroundColor="rgba(0, 0, 0, 0)"})}]);