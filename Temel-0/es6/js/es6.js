/* Arrow Function

    // const merhaba =function(){
    //     console.log("Merhaba");
    // }
    // merhaba();

    // const merhaba = () =>{
    //     console.log("Merhaba");
    // }
    // merhaba();

    // const merhaba = (firstName,lastName) =>{
    //     console.log("Merhaba",firstName,lastName);
    // }
    // merhaba("Murat","Coskun");

    // const merhaba = firstName =>{
    //     consoe.log("Merhaba",firstName);
    // }
    // merhaba("enes");

    // const merhaba = firstName => consoe.log("Merhaba",firstName);

    // merhaba("enes");

    // const merhaba = (firstName,lastName) => consoe.log("Merhaba",firstName,lastName);

    // merhaba("enes","tuglu");
*/
  
/* Destructing

    // let number1, number2;

    // arr[100,200,300,400];

    // number1 =arr[0];
    // number2 =arr[1];

    // [number1,number2] = arr;

    // const [number1,number2] =arr;
    // console.log(number1,number2);

    // Destructing objectives

    // const numbers ={
    //     a:1,b:2,c:3,d:4,e:5

    // };

    // const {a:number1, b:number2, e:number3}=numbers;
    // console.log(number1,number2,number3);


    // Destructing Functions

    // const getlangs = () =>{"Phyton", "Java" , "C#"};

    // const [lang1,lang2,lang3]= getLangs();

    // console.log(lang1,lang2,lang3);
*/

/* Spread

    // const langs = ["Phyton","C#","Java","Php"];

    // console.log(langs[0],langs[1],langs[2],langs[3]);

    // console.log(...langs);

    // const numbers = [1,2,3,4,5,6,7,8,9];

    // const [a,b,...numbers2]=numbers;

    // console.log(a,b);

    // console.log(numbers2);
*/

/* For-IN For-OF

    const person = {
        name:"Enes Emre",
        age:25,
        salary:3000
    };

    const langs =["Phyton","Java","C#","Php"];

    const name="Enes";

    // For-IN

    for(let prop in person){
    console.log(prop,person[prop]);

    }

    // For-IN Array

    for(let index in langs){
        console.log(index,langs[index]);
    }

    // For-IN String

    for(let index in name){
        console.log(index,name[index]);
    }

    // For-OFF
    for(let value of langs){
        console.log(value);
    }
    for(let characters of name){
        console.log(characters);
    }
*/

// MAPS

let myMap =new Map();

console.log(myMap);

const key1="Enes";
const key2 = {a:10,b:20};
const key3 =() => 2;

// Map Set

myMap.set(key1,"String Deger");
myMap.set(key2,"Object Literal Deger");
myMap.set(key3,"FunctionDeger");

console.log(myMap.get(key1));
console.log(myMap.get(key2));
console.log(myMap.get(key3));

//Map Size

console.log(myMap.size);

