// const numbers = [1, 2, 3, 4, 5]
const sumArray = arr => {
  let sum = 0
  const callback = function(element) {
    sum += element
  }
  arr.forEach(callback)
  return sum

}
// setInterval(sumArray(numbers),5000);

let sum = 0;
const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((num, posicion, array) => console.log(num, posicion, array))
// console.log(sum)

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]
  const countriesToUpperCase = countries.map((country) => country.toUpperCase())
//   console.log(countriesToUpperCase)
  
  /*
  // Arrow function
  const countriesToUpperCase = countries.map((country) => {
    return country.toUpperCase();
  })
  //Explicit return arrow function
  const countriesToUpperCase = countries.map(country => country.toUpperCase());
  */

//Filter countries containing land
const countriesContainingLand = countries.filter((pais) =>
  pais.includes('hola')
)
// console.log(countriesContainingLand)

const suma = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(suma);

