const element =document.querySelector("#clear-todos");
/*Element Ozellikler
console.log(element.id);
console.log(element.className);
console.log(element.classList);
console.log(element.classList[1]);
console.log(element.textContent);
console.log(element.innerHTML);
console.log(element.href);
console.log(element.style); 
*/

// Style Ve Element Ozellikleri Degistirme
element.className = "btn btn-warning" //danger,primary,sucsses
element.style.color="red";
element.style.marginLeft="5px";
element.href="https://www.youtube.com/watch?v=h-3CmKofKTU&list=LL&index=36";
element.target="_blank";
console.log(element.textContent);
element.textContent="Silin";
// element.textContent ="<span>Silin</span>"; html elementi olarask gozukmedi
element.innerHTML="<span style='color:green'>Silin</span>"
const elements = document.querySelectorAll(".lit-group-item");
elements.forEach(function(el)
{
    el.style.color ="red";
    el.style.background ="#eee";
});

let element2 =document.querySelector("li:last-child");
element2=document.querySelector("li:nth-child(2)");
element2=document.querySelector("li:nth-child(3)");
element2=document.querySelector("li:nth-child(4)");
element2=document.querySelectorAll("li:nth-child(odd)");
element2=document.querySelectorAll("li:nth-child(even)");

element2.forEach(function(el)
{
    el.style.background="#ccc";
    el.style.color ="red";
})