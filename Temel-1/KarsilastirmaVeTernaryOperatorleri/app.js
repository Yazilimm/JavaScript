console.log(2=="2"); // Genelde dıger dıllerde bu karsılastırma yapılamaz
console.log(2 === "2"); // degerlere ve tıplere bakılır bunu kullanmak daha ıyı

// Mantıksal Baglacalar

// Not Operatoru true=>false false=>true
console.log(2===2); //true
console.log(!(2===2)); //false

// And Operatoru
console.log((2===2)&&("Ahmet"==="Ahmet"));
console.log((2==="2")&&("Ahmet"==="Ahmet"));

// Or Operatoru
console.log((4===2)||("Ahmet"==="Ahmet"));
console.log((4===2)||("Ahmet"!=="Ahmet"));

// If
const error =true;
if(error===true)
{
    console.log("Hata Olustu");
}
else
{
    console.log("Hata Olusmadi");
}

const user ="mmc";
if(user ==="mmc")
{
    console.log("Kullanici Bulundu");
}
else
{
    console.log("Kullanici Bulunamadi")
}

const process ="1";
if(process ==="1")
{
    console.log("Islem 1");
}
else if(process ==="2")
{
    console.log("Islem 2");
}
else if(process ==="3")
{
    console.log("Islem 3");
}
else
{
    console.log("Gecersiz Islem ");
}

const number =100;
if(number===100)
{
    console.log("Sayi 100'e Esit");
}
else
{
    console.log("Sayi 100'e Esit Degil");
}

// Ternary Operatorleri

console.log(number ===100 ? "Sayi 100":"Sayi 100 Degil");