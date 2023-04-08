let value;

const todolist =document.querySelector(".list-group");
const todo =document.querySelector(".list-group-item:nth-child(2)");
const cardrow =document.querySelector(".card.row");

value=todolist;
value=todo;
value=cardrow;

// Child Nodes
value=todolist.childNodes; // Satir Atlamalari Sayiyor
value=todolist.childNodes[0];

// Children -Element
value=todolist.children;
value=todolist.children[0];
value=todolist.children[todolist.children.length-1];
value=todolist.children[2].textContent="Degisti";

value=cardrow;
value=cardrow.children;
value=cardrow.children[2].children[1].textContent="Burasi da Degisti";

value=todolist;
value=todolist.children[0];
value=todolist.firstElementChild;
value=todolist.lastElementChild;
value=todolist.children.length;
value=todolist.childElementCount;


value=cardrow;
value=cardrow.parentElement;
value=cardrow.parentElement.parentElement;

// Element Kardesleri
value=todo;
value=todo.previousElementSibling;
value=todo.nextElementSibling;
value=todo.nextElementSibling.nextElementSibling;
value=todo.previousElementSibling.previousElementSibling;



console.log(value);