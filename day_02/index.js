// Primitive Data Types
let myName = 'Elias', 
    lastName='Franco', 
    age=24, 
    city='Sucre', 
    isMarried=false,
    objetivo = null,
    widtOut;

console.log(`${myName} is the type ${typeof myName}`);
console.log(`${lastName} is the type ${typeof lastName}`);
console.log(`${age} is the type ${typeof age}`);
console.log(`${city} is the type ${typeof city}`);
console.log(`is Married is the type ${typeof isMarried}`);
console.log(`objetivo is the type ${typeof objetivo}`);
console.log(`widtOut is the type ${typeof widtOut}`);




let tarea = '30 Days Of JavaScript';
console.log(tarea);
console.log(tarea.length );
tarea = tarea.toUpperCase();
tarea = tarea.toLowerCase();
let firtsWord = tarea.substring(0,1);
// let firtsWord2 = reto.substr(0,5);
// console.log(firtsWord2);
console.log(firtsWord);

// Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
// Print the string on the browser console using console.log()
// Print the length of the string on the browser console using console.log()
// Change all the string characters to capital letters using toUpperCase() method
// Change all the string characters to lowercase letters using toLowerCase() method
// Cut (slice) out the first word of the string using substr() or substring() method
// Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
// Check if the string contains a word Script using includes() method
// Split the string into an array using split() method
// Split the string 30 Days Of JavaScript at the space using split() method
// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
// Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
// What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
// What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
// Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
// Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
// Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
// Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
// Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
// Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
// Use startsWith() method with the string 30 Days Of JavaScript and make the result true
// Use endsWith() method with the string 30 Days Of JavaScript and make the result true
// Use match() method to find all the a’s in 30 Days Of JavaScript
// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
// Use repeat() method to print 30 Days Of JavaScript 2 times

console.log( tarea.includes('javascript'));
tareaArray = tarea.split();
console.log(tareaArray);
tareaSeparada = tarea.split(' ');
console.log(tareaSeparada);
let empresas = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
empresas = empresas.split(', ');
console.log(empresas);

tarea = tarea.replace('javascript', 'python');
console.log(tarea);
tarea = tarea.replace('python', 'Javascript');

console.log(tarea.charAt(15));
console.log(tarea.charCodeAt(tarea.search('J')));
console.log(tarea.charCodeAt(3));

let repitiendo = tarea.repeat(5);
// console.log(repitiendo);



//  Level II

let palabras = 'The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.';
console.log(palabras);

let frase = 'I hope this course is not full of jargon';
console.log(frase.includes('jargon'));

let numero = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
console.log(numero);

let vsWeb = "Hola desde Visual studio Code Web";
console.log(vsWeb);
