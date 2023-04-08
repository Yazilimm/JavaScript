const langs = ["Phyton","Javascript","Java"];

// for (let index=0; index<langs.length; index++) {
//     console.log(langs);
// }

// langs.forEach(function(lang,index){
//     console.log(lang,index);
// });


const users=[
    {name: "enes", age: 36},
    {name: "kerem", age: 28},
    {name: "emre", age: 19}
];
const names = users.map(function(user){
    return user.name;
});

console.log(names);

for(let key in users){
    console.log(key, users[key]);
}