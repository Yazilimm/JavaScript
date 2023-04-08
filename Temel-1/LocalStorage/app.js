// Local Storage

// Set Item 
localStorage.setItem("hareket","burpee");
localStorage.setItem("tekrar","50");

// Get Item

const value = localStorage.getItem("tekrar");
console.log(value);
console.log(typeof value);

// Clear Local Storage
localStorage.clear();

// Item Sorgulama
console.log(localStorage.getItem("sport")); // null

if(localStorage.getItem("sport")==null)
{
    console.log("sorgulanan deger yok");
}
else
{
    console.log("sorgulanan deger bulunuyor");
}

// Local Storage Arrays (localStorage sadece string deger kabul ediyor)
const todos = ["Todo1","Todo2","Todo3","Todo4"];

localStorage.setItem("todos",todos); // string olarak yazıyor

localStorage.setItem("todos",JSON.stringify(todos)); // array'e cevirme

const value = JSON.parse(localStorage.getItem("todos")); // array olarak gösterme
console.log(value);

const form =document.getElementById("todo-form");
const todoInput = document.getElementById("todo");
form.addEventListener("submit",addTodo);
function addTodo(event)
{
    const value = todoInput.value;

    let todos;
    if(localStorage.getItem("todos")=== null)
    {
        todos =[];
    }
    else
    {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(value);
    localStorage.setItem("todos",JSON.stringify(todos));

    event.preventDefault();
}