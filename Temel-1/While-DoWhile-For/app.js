/* While Donguleri
let i = 0;
while(i<10) 
{
    console.log(i);
    i+=1; //i++;

}

// Break Ve Contiune
let i =0;
while(i<10)
{
    console.log(i);
    if(i===5)
    {
        break;
    }
    i++;
}

while(i<10)
{
    if((i===3)||(i===5))
    {
        i++; // Bunu yazmazsak sonsuz donguye girer
        continue;
    }
    console.log(i);
    i++;
}
*/

/* Do While Donguleri
let i=0;
do
{
    console.log(i);
    i++;

}while(i<10);
*/

/* For Donguleri

const langs =["Python","JScript","Java"];
let index = 0;
while(index<langs.length)
{
    console.log(langs[index]);
    index++;
}

for(let index= 0; index<langs.length;index++)
{
    console.log(langs[index]);
}

langs.forEach(function(langs,index))
{
    console.log(lang,index)
};
*/

/* Map Dongusu
const user = 
[
    {name:"Enes",age:21},
    {name:"Emre",age:22},
    {name:"Kerem",age:13}
];

const name= user.map(function(user)
{
    return user.name; 
});

const age= user.map(function(user)
{
    return user.age;
});

console.log(deneme);
*/

/* For in Dongusu
const user = 
{
    name:"Mustafa",
    age:25
};

for (let key in user)
{
    console.log(key,user[key]);
}
*/