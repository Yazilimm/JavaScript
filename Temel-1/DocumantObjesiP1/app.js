let value;

value=document;
value=document.all;
value=document.all.length;
value=document.all[0];
value=document.all[6];
value=document.all[document.all.length-1];
/*
const elements =document.all; // HTML collection

for(let i = 0; i<elements.length;i++)
{
    console.log(elements[i])
}
*/
/* HTML Collevtion foreach ile donulemez diziye cevirmek gerekir
elements.array.forEach(element => {
    console.log(elements)
});
*/
/*
const collection =Array.from(document.all);

collection.forEach(function(collection)
{
    console.log(collection)
})
*/
value=document.all;
value=document.body;
value=document.head;
value=document.location;
value=document.location.port;
value=document.location.hostname;

value=document.URL;

value = document.characterSet;
console.log(value)