
function loadtodo(){
    //this function load the todos from the browser
    const todos = JSON.parse(localStorage.getItem('todos')) || {"todolist":[]};
    console.log(todos);
    return todos;

}

function addToDoToLocalStorage(todo){
     const  todos =loadtodo();
     todos.todolist.push(todo);
     localStorage.setItem("todos",JSON.stringify(todos));
}


function excuteFilterAction(event){
    const todolist= document.getElementById("todolist");
   const element = event.target
 const value=  element.getAttribute("data-filter")
 todolist.innerHTML='';
const todos=loadtodos

 if(value==="all"){
console.log(todolist)
todos.todolist.forEach(todo => {
    appendTodoHtml(todo);
   }
   );
 }else if (value==="pending"){
    todos.todolist.forEach(todo => {
if(todo)
        appendTodoHtml(todo);
       }
       );
 }else {
    
 }
}


function appendTodoHtml(todotext){
const todolist= document.getElementById("todolist");


const todoItem=document.createElement("li");

todoItem.textContent=todotext;
todoItem.classList.add("todoItem")

todolist.appendChild(todoItem);


const editBtn = document.createElement("button");
editBtn.textContent="Edit";
editBtn.classList.add("editBtn");

const deleteBtn = document.createElement("button");
deleteBtn.textContent="Delete";
deleteBtn.classList.add("deleteBtn");

const completedBtn = document.createElement("button");
completedBtn.textContent="Completed";
completedBtn.classList.add("completeBtn");


todoItem.appendChild(editBtn);
todoItem.appendChild(deleteBtn);
todoItem.appendChild(completedBtn);
}


document.addEventListener("DOMContentLoaded",()=>{
    const todoinput=document.getElementById('todoinput');

 const submitButton=document.getElementById('addtodo');

 const todolist= document.getElementById("todolist");


 const filterbtns = document.getElementsByClassName("filterbtn")
 console.log(filterbtns)
for(  const btn of filterbtns) {
    console.log(filterbtns)
    btn.addEventListener("click",excuteFilterAction);
 
}

     submitButton.addEventListener("click",()=>{
    const todotext=todoinput.value;
    if(todotext==""){
        alert("please enter the todo");
    }else{
        addToDoToLocalStorage({text:todotext , isCompleted:false});
        appendTodoHtml({text:todotext, isCompleted:true});
        todoinput.value=" ";
    }
 });



    todoinput.addEventListener("change",(event)=>{
        //this callback ethod is fired everytime there is a chnage in input tag
       const todotext=event.target.value;
       event.target.value=todotext.trim();
       console.log(event.target.value)
    }
    );
   const todos= loadtodo();



   todos.todolist.forEach(todo => {
    // const newTodoItem=document.createElement('li');
    // newTodoItem.textContent=todo;
    // todolist.appendChild(newTodoItem);
    appendTodoHtml(todo);
   }
   );
})