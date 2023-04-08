let value ;

const firstName ="enes";
const lastName ="tuglu";
const langs="Java, C# , Phyton ,C#";
const message = "Javascirpt ile web tasarim ogreniyorum ile";

value= firstName+lastName;
value=firstName + " " + lastName;
value=firstName.length;
value=firstName.concat(" ",lastName," "," Rap");
value=lastName.toLowerCase();
value=lastName.toUpperCase();
value= langs.lastIndexOf("C#");
value= message.replace(/ILE/i,"ama");
value= message.replace(/ILE/g,"ama");

console.log(value);