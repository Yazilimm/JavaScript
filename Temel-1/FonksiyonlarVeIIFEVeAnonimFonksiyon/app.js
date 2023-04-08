// Fonksiyon Tanimlama

function merhaba(name="BilgiYok",age="BilgiYok")
{
    //if(typeof name ==="undefined") name ="Bilgi Yok";
   //if(typeof age ==="undefined") age ="Bilgi Yok";
    console.log(`Isim:${name} Yas:${age}`);
}

merhaba("Murat",25); // Fonksiyon Cagrisi

merhaba(); // Parametre Girilmedigi Zaman Undefined Olarak Tanimlanir

function square(x)
{
    return (Math.pow(x, 2));
}
function cube(x)
{
    return (Math.pow(x,3));
}

//let a = square(12);
//a =cube(a);
let a =cube(square(12));
console.log(a);

// Immediately Invoked Function Expression (IIFE)

(function(name)
{
    console.log("Merhaba",name);
})("Enes");

const database = 
{
    host:"localhost",
    add:function()
    {
        console.log("Eklendi");
    },
    get:function()
    {
        console.log("Elde Edildi");
    },
    update:function(id)
    {
        console.log(`Id:${id} silindi`);
    }
}

console.log(database.host);
database.add();
database.delete(10);
