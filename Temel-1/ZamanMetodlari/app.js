let value;

const now = new Date() // Suanki zamani almamizi saglar
console.log(now);

const date1 = new Date("07-13-2000 06:15:00");
const date2 = new Date("July 13 2000");
const date3 = new Date("7/13/2000");

value= date1;
/* Get kismi
value = date1.getMonth();
value = date1.getDate();
value = date1.getDay();
value = date1.getHours();
value = date1.getMinutes();
value = date1.getSeconds();
*/

date1.setMonth(7);
date1.setDate(15);
date1.setFullYear(1990);
date1.setHours(0);
date1.setMinutes(30);
date1.setSeconds(45);
console.log(value);