// Element Secimleri

    /*Elements select by ID
    let element;

    element.getElementById("todo-form");
    element.getElementById("task-title");

    console.log(element);
    */

    /* Element select by Class

    let element;

    element=document.getElementsByClassName("list-group-item");
    element=document.getElementsByClassName("card-header");

    console.log(element);
    */

    /* Elements select by Tag 

    let element;

    element=document.getElementsByTagName("li");
    element=document.getElementsByTagName("div");

    console.log(element);
    */

    /* Query Selectors

    let element;

    element=document.querySelector("#todo-form");
    element=document.querySelector("#task-title");
    element=document.querySelector(".list-group-item");
    element=document.querySelector("li");

    element=document.querySelectorAll(".list-group-item");
    element.forEach(function(el){
        console.log(el);
    });

    console.log(element);
    */

// Change elements of style or properties

    /* Elements Properties
    const element=document.querySelector("#clear-todos");
    console.log(element.id);
    console.log(element.className);
    console.log(element.classList);
    console.log(element.textContent);
    console.log(element.innerHTML);
    console.log(element.href);
    console.log(element.style);
    console.log(element);
    */

// Change Style and Properties
    /*
    const element=document.querySelector("#clear-todos");
    element.className="btn btn-primary";
    element.style.marginLeft="15px";
    element.href="https://www.udemy.com/course/komple-sifirdan-web-gelistirme-kursu/learn/lecture/12171670#notes";
    element.target="_blank";
    element.innerHTML="<span style='color:black'>Silin</span>";


    const element = document.querySelectorAll(".list-group-item");
    element.forEach(function(el){
        el.style.color = "red";
        el.style.backgroundColor="#eee";
    });
    */

/* search by elements
    let value;
    const todolist=document.querySelector(".list-group-item");
    const todo=document.querySelector(".list-group-item:nth-child(2)");
    const cardrow=document.querySelector(".card.row");
    value=todolist;
*/

/* create elements

    const newLink=document.createElement("a");
    const cardbody=document.getElementsByClassName("card-body")[1];
    newLink.id="clear-todos";
    newLink.className="btn btn-danger";
    newLink.href="https://www.udemy.com/course/komple-sifirdan-web-gelistirme-kursu/learn/lecture/12171670#notes";
    newLink.target="_blank";
    newLink.appendChild(document.createTextNode("farkli sayfaya git"));
    cardbody.appendChild(newLink);
    */

    /* Event Listener 
    const filterInput=document.getElementById("filter");
    const todoForm=document.getElementById("todo-form");

    todoForm.addEventListener("submit",function(e){

        alert("todo eklendi");

        e.preventDefault();
    });
*/

/* Key Events
    const header = document.querySelector(".card-header");
    const todoInput = document.querySelector("#todo");

    todoInput.addEventListener("keyup",function(e){
        header.textContent=e.target.value;
    });
/* Key press
    document.addEventListener("keypress",function(e){
        console.log(e.which);
        console.log(e.key);
        console.log("keypress");

    });

    // Key Down

    document.addEventListener("keydown",function(e){
        console.log(e.which);
        console.log(e.key);
        console.log("keydown");

    });

    // Key Up
    document.addEventListener("keyup",function(e){
        console.log(e.which);
        console.log(e.key);
        console.log("keyup");

    });

*/

