// fecha actual
const hoy = new Date();
const fecha = hoy.toDateString();
const hora = hoy.toLocaleTimeString();

console.log(`${fecha} ${hora}`);

// fecha de nacimiento
const birth = new Date(2000, 7, 8, 11, 45, 0);
const birthDate = birth.toDateString();
const birthTime = birth.toLocaleTimeString();
console.log(`${birthDate} ${birthTime}`);

// Calcula cuántos años han transcurrido entre ambas fechas.

const yearToday = hoy.getFullYear();
const yearBirth = birth.getFullYear();
let time = yearToday - yearBirth;
console.log(`Han pasado ${time} años`);


// extra

const birthMonth = birth.getMonth();
const birthDay = birth.getDay();
const birthHour = birth.getHours();
const birthSecond = birth.getSeconds();
const birthMinute = birth.getMinutes();
const birtgMilli = birth.getMilliseconds();

console.log(`${birthDay} ${birthMonth} ${yearBirth}`);
console.log(`${birthHour} ${birthMinute} ${birthSecond}`);