!function(e){var t={};function r(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(o,a,function(t){return e[t]}.bind(null,a));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);var o=class{constructor(e,t,r="",o=3,a=null,c=null){this.project=e,this.title=t,this.description=r,this.priority=o,this.dueDate=a,this.tags=c||[],this.completed=!1}addTag(e){this.tags.push(e)}removeTag(e){this.tags.includes(e)&&this.tags.splice(this.tags.indexOf(e),1)}};var a=class{constructor(e,t="",r=[]){this.title=t,this.todos=r,this.ID=e}addToDo(e){this.todos.push(e)}deleteToDo(e){this.todos.includes(e)&&this.todos.splice(this.todos.indexOf(e),1)}};var c=class{constructor(){this.nextID=0,this.projects=[]}addProject(){var e=new a(this.nextID);return this.nextID+=1,this.projects.push(e),e}removeProject(e){this.projects.includes(e)&&this.projects.splice(this.projects.indexOf(e),1)}getProjByID(e){let t=!1;return this.projects.forEach(r=>{r.ID==e&&(t=r)}),t}getIDByProj(e){return e.ID}addToDo(e,t){e.addToDo(t)}};var d=class{constructor(e){this.projectManager=e,this.projectsDiv=document.querySelector("#projects")}addProjectView(e){let t=this.createProjectCard(e);t.append(this.createProjectNameInput(e)),t.append(this.createProjectTrashIcon(e,t)),t.append(this.createAddItemButton(e)),this.projectsDiv.append(t)}createProjectCard(e){let t=document.createElement("div");return t.classList.add("project-card"),t.setAttribute("data-proj",this.projectManager.getIDByProj(e)),t}createProjectNameInput(e){let t=document.createElement("input");return t.classList.add("project-name"),t.type="text",t.placeholder="Project name",t.addEventListener("input",(function(){e.title=this.value})),t}createProjectTrashIcon(e,t){let r=document.createElement("i");return r.classList.add("fas"),r.classList.add("fa-trash-alt"),r.addEventListener("click",()=>{this.projectManager.removeProject(e),this.projectsDiv.removeChild(t)}),r}createAddItemButton(e){let t=document.createElement("button");t.classList.add("add-new-item"),t.classList.add("form-elem"),t.textContent="+ Add new item";let r=this;return t.addEventListener("click",(function(){r.openToDoCreator(e)})),t}addTodoView(e,t){let r=this.projectManager.getIDByProj(e);document.querySelectorAll(".project-card").forEach(e=>{if(e.getAttribute("data-proj")==r){let r=e.lastChild,o=document.createElement("div");o.classList.add("todo-basic"),o.setAttribute("data-todo",t),this.addToDoLine(o),e.insertBefore(o,r)}})}openToDoCreator(e){let t=document.querySelector("#add-todo");t.style.display="block",t.setAttribute("data-proj",this.projectManager.getIDByProj(e)),document.querySelector("#background-cover").style.backgroundColor="rgba(0, 0, 0, .5)"}addToDoLine(e){let t=document.createElement("i");t.classList.add("far"),t.classList.add("fa-circle");let r=document.createElement("input");r.classList.add("unchecked"),r.classList.add("project-name"),r.value=newtodo.title;let o=document.createElement("i");o.classList.add("far"),o.classList.add("fa-edit"),e.appendChild(t),e.appendChild(r),e.appendChild(o)}};const n=new c,s=new d(n);document.querySelector("#new-project-button").addEventListener("click",()=>{let e=n.addProject();s.addProjectView(e)}),document.querySelector("#add-to-do-button").addEventListener("click",()=>{let e=document.querySelector("#add-todo"),t=n.getProjByID(parseInt(e.getAttribute("data-proj"))),r=document.querySelector("#title"),a=document.querySelector("#date"),c=document.querySelector("#priority"),d=document.querySelector("#desc");console.log(r.value,a.value,c.value,d.value);let i=new o(t,r.value,d.value,c.value,d.value);n.addToDo(t,i),s.addTodoView(t,i),e.style.display="none",r.value="",a.value="",c.value="",d.value="",document.querySelector("#background-cover").style.backgroundColor="rgba(0, 0, 0, 0)"})}]);