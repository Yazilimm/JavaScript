/* Scope Kavrami

// Global Scope

function a()
{
    // Function Scope
}

if(a)
{
    //Bloke Scope
}
*/

/* Ornekler
var value1 =10;
let value2 =20;
const value3=30;

function Func()
{
    var value1=40;
    let value2=50;
    const value2=60;
    console.log(value1,value2,value3);
}
Func();
console.log(value1,value2,value3);
// Goruntu 40-50-60 --- 10-20-30

if (true)
{
    var a =10;
    let b =20;
    const c =30;
    //console.log(a,b,c)
}
console.log(a);
console.log(b); // not defiend let en dolayi
console.log(c); // not defiend const en dolayi

var value1 =10;
let value2 =20;
const value3=30;


if (true)
{
    var value1=40;
    let value2 =50;
    const value3=60;
    console.log(value1,value2,value3);
}
console.log(value1,value2,value3);
// Goruntu 40-50-60 --- 40-20-30
*/s