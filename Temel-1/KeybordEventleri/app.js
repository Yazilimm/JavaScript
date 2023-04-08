// Klavye Eventleri

/* keypress Eventleri
document.addEventListener("keypress", runEvent);
function runEvent(event) 
{
    console.log(event.which); // klavyede hangi tusa basıldıysa ascıı tablosu degerini verir
    console.log(event.key); // dırek hangi tusa basıldıysa gösterir sadece harfler ve sayılar degerını gosterır
    console.log("Naber");
}
*/

/* keydown Eventleri
document.addEventListener("keydown", runEvent);
function runEvent(event) 
{
    //console.log(event.which); 
    console.log(event.key);  // butun tusların degerını gosterır
    console.log("Naber");
}
*/

/* keyup Eventleri
document.addEventListener("keyup", runEvent);
function runEvent(event) 
{
    //console.log(event.which); 
    console.log(event.key);  // butun tusların degerını gosterır
    console.log("Naber");
}
*/

const header = document.querySelector(".card-header");
const todoInput = document.querySelector("#todo");

todoInput.addEventListener("keyup", changeText);
function changeText(event)
{
    header.textContent=event.target.value;
    console.log(event.target.value); // e.target ile element aldık value ile içindeki yazıyı aldık

}