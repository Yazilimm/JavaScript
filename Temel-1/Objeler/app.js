let value;

const programmer = 
{
    name :"Enes Emre Tuglu",
    age : 21,
    email : "enesemretuglu572@gmai;.com",
    lang : ["Python","C#","JScript"],

    adress:
    {
        city :"Ankara",
        street :"Yenikent"
    },

    work : function()
    {
        console.log("Programci Calisiyor");
    }
}

value =programmer;

value = programmer.email; // Genel olarak kullanilan
value = programmer["email"];

value = programmer.adress.city;

value =programmer.work();

const programmers = [
    {name:"Enes Emre",age:25},
    {name: "Kerem", age : 20}
];

value =programmers[0].name;

console.log(value);