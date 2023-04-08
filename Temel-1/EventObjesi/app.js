const filterInput = document.getElementById('filter');
const todoform = document.getElementById('todo-form');
/*
filterInput.onfocus=function()
{
    console.log("Naber"); // tıklandıgında
}
*/
/*
filterInput.addEventListener("focus", function(event)
{
    console.log(event);
    console.log(event.target);
    console.log(event.target.placeholder);
    console.log(event.type);
    //console.log("Naber");
})
*/

todoform.addEventListener("submit", submitForm);
function submitForm(event)
{
    console.log("submit eventi");

    event.preventDefault(); // elemten default ozelliklerini iptal eder
}
