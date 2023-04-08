// Session Stroage - Key Ve Value

// Butonları Seçmek
const add = document.querySelector("#add");
const del = document.querySelector("#delete");
const clear = document.querySelector("#clear");

// Inputlar
const addkey = document.querySelector("#addkey");
const addvalue = document.querySelector("#addvalue");
const deletekey = document.querySelector("#deletekey");

add.addEventListener("click",addItem);
del.addEventListener("click",deleteItem);
clear.addEventListener("click",clearItem);

function addItem(event)
{
    sessionStorage.setItem(addkey.Value, addvalue.Value);
}
function deleteItem(event)
{
    sessionStorage.removeItem(deletekey.Value);
}
function clearItem(event)
{
    sessionStorage.clear();
}
