// Replace

const cardbody = document.querySelectorAll('.card-body')[1];
const newElement = document.createElement("h3");

newElement.className ="card-title";
newElement.id="task-title";
newElement.textContent ="Yeni Todolar";

// Eski Element

const oldElement = document.querySelector("#task-title");

cardbody.replaceChild(newElement,oldElement);


console.log(newElement);