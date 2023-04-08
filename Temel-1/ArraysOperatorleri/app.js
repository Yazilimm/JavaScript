let value;
const numbers = [43, 56,33,23,44,35,5];

//const numbers2 = new Array(1,2,3,4,5,6,7);

const langs = ["Python", "JScript", "C#", "Java"];

const a =["Merhaba",22,null,undefined,3.14];

value = numbers.length;

// Indeksleme
value = numbers[0];
value = numbers[numbers.length-1];
// Herhangi bir indeksteki degeri degistirme
numbers[2]=1000;
value=numbers;
// IndexOf
value=numbers.indexOf(1000);
value=numbers;
// Arrayin Sonuna Deger Ekleme
numbers.push(2000);
value=numbers;
// Arrayin Basina Ekleme
numbers.unshift(3000);
value=numbers;
//Arrayin Sonundan Deger Atma
numbers.pop();
value=numbers;
//Arrayin Basindan Deger Atma
numbers.shift();
value=numbers;
//Belirli Index Araligini Atma
numbers.splice(0,3);
value=numbers;
//Ters Cevirme
numbers.reverse;
value=numbers;
// Siralama
value=numbers.sort(); //eger birden fazla basamak varsa ilk basmaga bakarak siralama
value =numbers.sort(function(x,y)
{
     // Kucukten Buyuge Siralama
     return x-y;
});
value =numbers.sort(function(x,y)
{
    //Buyukten Kucuge Siralama
    return y-x;
});
console.log(value);
 
