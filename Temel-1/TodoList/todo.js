// Tüm Elementleri Secme
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstcardBody = document.querySelectorAll(".card-body")[0];
const lastcardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListener();

function eventListener() // Tüm Event listener
{
    form.addEventListener("submit", addTodo);
    document.addEventListener("DOMContentLoaded", loadAllTodosToUI);
    lastcardBody.addEventListener("click", deleteTodo);
    filter.addEventListener("keyup", filtertodos);
    clearButton.addEventListener("click", clearAllTodos);
}

function clearAllTodos(e) {
    if (confirm("Are you sure you want to")) {
        todoList.innerHTML = "";
        localStorage.removeItem("todos");
    }

}

function filtertodos(e) {
    const filterValue = e.target.value.toLowerCase();
    const listItems = todoList.querySelectorAll(".list-group-item");

    listItems.forEach(function(listItem) {
        const text = listItem.textContent.toLocaleLowerCase();
        if (text.indexOf(filterValue) == -1) {
            listItem.setAttribute("style", "display:none !important");
        } else {
            listItem.setAttribute("style", "display:block");
        }
    });

}

function deleteTodo(e) {
    console.log(e.target);
    if (e.target.className === "fa fa-trash") {
        e.target.parentElement.parentElement.remove();
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
        showAlert("success", "Todo Basarıyla Silindi");
    }
}

function deleteTodoFromStorage(deletetodo) {
    let todos = getTodosFromStorage();
    todos.forEach(function(todo, index) {
        if (todo === deletetodo) {
            todos.splice(index, 1); // Arrayden degeri silme
        }
    });
    localStorage.setItem("todos", JSON.stringify(todos));
}

function loadAllTodosToUI() {
    let todos = getTodosFromStorage();
    todos.forEach(function(todo) {
        addTodoToUI(todo);
    })
}

function addTodo(event) {
    const newtodo = todoInput.value.trim();
    if (newtodo === "") {


        showAlert("danger", "Lütfen Bir Todo Girin");

    } else {
        addTodoToUI(newtodo);
        addTodoToStorage(newtodo);
        showAlert("success", "Todo Basarılı Sekilde Girildi");

    }

    event.preventDefault();
}

function getTodosFromStorage() {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}

function addTodoToStorage(newtodo) {
    let todos = getTodosFromStorage();
    todos.push(newtodo);
    localStorage.setItem("todos", JSON.stringify(todos));

}

function showAlert(type, message) {
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.textContent = message;

    firstcardBody.appendChild(alert);
    // Set TimeOut
    setTimeout(function() {

        alert.remove();
    }, 2000);

}

function addTodoToUI(newtodo) {

    const listItem = document.createElement("li");
    // link olusturma
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete item";
    link.innerHTML = "<i class='fa fa-trash'></i>";
    listItem.className = "list-group-item d-flex justify-content-between";
    // Text Node ekleme
    listItem.appendChild(document.createTextNode(newtodo));
    listItem.appendChild(link);
    // Todo Liste ListItem'ı ekleme
    todoList.appendChild(listItem);


    todoInput.value = "";


}