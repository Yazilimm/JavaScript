let value;

// Veritiplerini String'e Cevirme

value=123;
value=String(123);
value=3.14;
value=String(3.14);
value=String(true);
value=String(false);
value= String(function() {console.log()});
value=String([1,2,3,4]);

value =(10).toString();

// Veritiplerini Sayiya Cevirme
value = Number("123");
value = Number(null);
value = Number(undefined) // not a number cikar
value = Number("Hello World"); // not a number cikar
value = Number(function(){console.log()}); // not a number cikar
value=Number([1,2,3,4]); // not a number cikar

value = Number("3.14");
value = parseFloat("3.14");

value =parseInt("3");


// Otomatik Cevirme
const a ="Hello"+34;
console.log(a);
console.log(typeof a);


console.log(value);
console.log(typeof value);
