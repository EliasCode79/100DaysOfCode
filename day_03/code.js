// firstName, lastName, country, city, age, isMarried, year 
// let firstName = 'Elias', lastName = 'Franco', country = 'Bolivia', age = 24, isMarried = false;
// console.log(typeof firstName);
// console.log(typeof lastName);
// console.log(typeof country);
// console.log(typeof age);
// console.log(typeof isMarried);

// What is the year today?
// What is the month today as a number?
// What is the date today?
// What is the day today as a number?
// What is the hours now?
// What is the minutes now?
let now = new Date();
let anioNacimiento = prompt('Introducir su año de nacimiento');
// console.log(typeof anioNacimiento);
let anioRestantes = now.getFullYear() - parseInt(anioNacimiento);
// anioRestantes >= 18 ? console.log('Puede conducir') : console.log('No puede conducir');
anioRestantes > 17 ? console.log('Puede conducir') : console.log('No puede conducir es menor de edad');
// 2022 - 2020 = 2