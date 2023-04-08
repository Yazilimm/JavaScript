const filter = document.getElementById("filter");

document.addEventListener("DOMContentLoaded",loadFilter);
function load (event)
{
    console.log("Sayfa Yüklendi ");
}

// Focus Ve Blur
filter.addEventListener("focus",run);
filter.addEventListener("blur",run);
function run (event)
{
    console.log(event.type);
}
// Paste
filter.addEventListener("paste",run);
function run (event)
{
    console.log(event.type);
}
// Copy
filter.addEventListener("copy",run);
function run (event)
{
    console.log(event.type);
}
// Cut
filter.addEventListener("cut",run);
function run (event)
{
    console.log(event.type);
}
// Select
filter.addEventListener("select",run);
function run (event)
{
    console.log(event.type);
}