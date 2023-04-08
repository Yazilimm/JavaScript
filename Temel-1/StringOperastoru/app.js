let value;

const firstName = "Enes";
const lastName  = "Tuglu";

const langs =" Python, C#,JScript";

value= firstName+lastName;
value= firstName+ " " +lastName;
value= "Mustafa Murat ";
value= value+"Coskun";
value+= "Coskun";
value= firstName.length;
value= firstName.concat(" ",lastName," ",langs);
value= firstName.toLowerCase;
value= firstName.toUpperCase;
value= firstName[2];
value= firstName[firstName.length-1]; //son karakter

//Index OF
value= firstName.indexOf("s"); // buyuk kucuk harf duyarli
value= firstName.indexOf("S"); // -1 cikar

// Char At
value= firstName.charAt(0);
value= firstName.charAt(firstName.length-1);

// Spilt
value= langs.split(",");

// Replace
value= langs.replace("C#"," Java");

// Includes
value= langs.includes("Java");



console.log(value);