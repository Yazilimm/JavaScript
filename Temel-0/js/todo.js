const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const fisrtcardbody = document.querySelectorAll(".card-body")[0];
const secondcardbody = document.querySelectorAll(".card-body")[1];
const filter =document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");


function eventlisteners() {
    form.addEventListener("submit", addtodo);
    secondcardbody.addEventListener("click",deletetodo);
    filter.addEventListener("keyup",filterTodos);
    clearButton.addEventListener("click",cleartodos);
}

function addtodo(e) {
    const newTodo = todoInput.value.trim();
    if(newTodo===""){
        showalert("danger","This is a danger alert—check it out!");
    }
    else{
        addTodoToUI(newTodo);
        showalert("success","This is a success alert—check it out!");
    }
   

    e.preventDefault();
}
function deletetodo(e){
    if(e.target.className=="fa fa-remove"){
        e.target.parentElement.parentElement.remove();
        showalert("success","This is a success alert—check it out!");
    }
}
function filterTodos(e){
    const filterValue=e.target.value.toLowerCase();
    const listItems=document.querySelectorAll(".list-group-item");
    listItems.forEach(function(listItem){
        const text=listItem.textContent.toLowerCase();
        if(text.indexOf(filterValue) === -1){
            listItems.setAttribute("style","display:none");
        }
        else{
            listItems.setAttribute("style","display:block ");
        }
    });
}
function cleartodos(e){
    if(confirm("Are you sure you want to")){
        while(todoList.firstElementChild != null){
            todoList.removeChild(todoList.firstElementChild);
        }
    }
}
function showalert(type,message){
    const alert=document.createElement("div");
    alert.className =`alert alert-${type}`;
    alert.textContent=message;
    fisrtcardbody.appendChild(alert);
    setTimeout(function(){
        alert.remove();
    },1000);
}
function addTodoToUI(newTodo){

    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href="#";
    link.className="delete-item";
    link.innerHTML="<i class = 'fa fa-remove'></i>"


    listItem.className="list-group-item d-flex justify-content-between";
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);

    todoList.appendChild(listItem);
    todoInput.value="";
}


eventlisteners();