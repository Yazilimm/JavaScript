/* Event Bubbling

document.querySelector(".container").addEventListener("click",function(){
    console.log("Div Container");
});

document.querySelector(".card.row").addEventListener("click",function(){
    console.log("Card row");
});

document.querySelectorAll(".card-body")[1].addEventListener("click",function(){
    console.log("Card Body"); 
});
*/

// Event Capturing Veya Delegation

const cardBody = document.querySelectorAll(".card-body")[1].addEventListener("click",run);
function run(e)
{
    if(e.target.className==="fa fa-remove")
    {
        console.log("Silme Islemi");
    }
    if(e.target.id==="filter")
    {
        console.log("Filtreleme Islemi");
    }
    if(e.target.id==="clear-todos")
    {
        console.log("Tüm Todo Silme Islemi");
    }

    console.log(e.target);
}

