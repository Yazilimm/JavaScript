// Yeni Element Olusturma
// <a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>               

const newLink=document.createElement("a");
const cardbody=document.getElementsByClassName("card-body")[1]; // const cardbody = document.querySelectorAll('.card-body')[1];

newLink.id="clear-todos";
newLink.className="btn btn-danger";
newLink.href="https://www.youtube.com/watch?v=iAgSz8XudIM";
newLink.target="_blank";
newLink.appendChild(document.createTextNode("Farkli Sayfaya Git"));
cardbody.appendChild(newLink);

/* Text Content tehlikeli olur butun her sey yerine yazdigimiz sey gelebilir
newLink.textContent="Farkli Sayfaya Git";
cardbody.textContent="asdafasdfas"; tehlike kismi bir bak
*/
/* Text Node
const text = document.createTextNode("Naber");
cardbody.appendChild(text);
*/

console.log(cardbody);
console.log(newLink);