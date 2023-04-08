/* Confrim
const cevap =confirm("Emin Misiniz");
console.log(cevap); // True-False
if(cevap) // cevap ===true ile ayni
{
    console.log("Silin Gitsin");
}
else
{
    console.log("Silmeyin")
}

// Ya Da

if(confirm("Emin Misiniz")) // cevap ===true ile ayni
{
    console.log("Silin Gitsin");
}
else
{
    console.log("Silmeyin")
}
*/

/* Prompt
const cevap = prompt("2 + 2 = ?");
if(cevap ==="4")
{
    console.log("Dogru");
}
else
{
    console.log("Yanlis");
}
*/

/* Location
let value;
value = window;
value = window.location;
value = window.location.port;
value = window.location.href;
value = window.location.host;
value = window.location.hostname;

if(confirm("Sayfa Yenilensin Mi"))
{
     window.location.reload();
}
else
{
    console.log("Sayfa Yenilenemedi");
}
console.log(value);
*/

/* Height Width
let value;
value=window.outerHeight;
value=window.outerWidth;
value =window.innerHeight;
value =window.innerWidth;
console.log(value);
*/

/* Scroll
let value;
valu=window.scrollX;
valu=window.scrollY;
console.log(value);
*/