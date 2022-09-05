//              Ejercicios - Nivel 1



// const arrayEmpty = [];
// const arrayElements = [1,2,3,4,5,6];
// let lengthArraElements = arrayElements.length;
// console.log(lengthArraElements);
// let firtsElement = arrayElements[0];
// let midleElement = arrayElements[Math.round(arrayElements.length/2)-1];
// let lastElement = arrayElements[arrayElements.length - 1];
// console.log(`El primer elemento es: ${firtsElement}`);
// console.log(`El del medio elemento es: ${midleElement}`);
// console.log(`El ultimo elemento es: ${lastElement}`);

const mixedDataTypes = ['elemento1', 23, true, ['otro array'], 3.15, null];
// console.log(mixedDataTypes[mixedDataTypes.length-1]);
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
// console.log(itCompanies);
// console.log(itCompanies.length);
// console.log(itCompanies[0].toUpperCase());

// console.log(`${itCompanies.slice(0, itCompanies.length-1)} and ${itCompanies[itCompanies.length-1]} son grandes compañias de IT`);

let company = itCompanies.includes('Google');
// company === true ? console.log('La compañia si existe en la lista') : console.log('La compañia no existe en la lista');

// const ocompa = itCompanies.slice().includes('o');
// console.log(ocompa);
itCompanies.sort();
// console.log(itCompanies);
let otro = itCompanies.reverse();
// console.log(itCompanies);
// console.log(`Devuelve esto ${otro}`);

const tresCompay = itCompanies.slice(0,3);
// console.log(tresCompay);
const lastCompany = itCompanies.slice(-3);
// console.log(lastCompany);


//              Ejercicios - Nivel 2

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
text = text.replace('.','');
// console.log(text);
text = text.replace(',', '');
// console.log(text);
const word = text.split(' ');
console.log(word);
console.log(word.length);