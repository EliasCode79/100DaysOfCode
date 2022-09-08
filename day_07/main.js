
//      Funciones declaradas
function holaMundo(nombre){
    return `Hola ${nombre} como estas?`;
}

console.log(holaMundo('Lia'));

//  FUNCIONES CON ILIMITADOS PARAMETROS
// Aveces nos envia argumentos q no hemos declarado en la funcion, estas argumentos se llegan a almacenar en 'arguments', este es como un vector aunque este tiene la unico metodo length, en realidad es un objeto.
function sumAllNums() {
 console.log(arguments)          // aca estamos imprimiendo los argumentos q no declaramos en la funcion.
}

sumAllNums(1, 2, 3, 4)
// Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]

// Para las Arrow funcion no tenemos el objeto 'arguments', para implementar q toma un numero ilimitado de de argumentos, usamos el operador de propagacion seguido de cualquier nombre de parametro.

const arrowConParemetros = (...parametros) => {     // 'parametros' puede ser cualquier nombre, solo no debemos olvidarnos del operador de propagacion q es '...'
    console.log(parametros);
}

arrowConParemetros('hola mundo', 'veamos q pone aca');





// Funciones Anonimas
const anonymousFun = function() {
    console.log(
      'I am an anonymous function and my value is stored in anonymousFun'
    )
}

anonymousFun();


// Function expression
const square = function(n) {
    return n * n
}
  
console.log(square(2)) // -> 4

  
//   Funcion de autoinvocacion
let squaredNum = (function(n) {
  return n * n
})(9)   // El 9 es el parametro ya establecido

console.log(squaredNum)     // aca solo mencionamos la funcion, no la estamos llamando.

const saludo = nombre => {
    console.log(`Bienvenido ${nombre} `);
}

saludo('Elias', 'Franco');


//      Funciones con parametros por defecto
const hi = (nombre = 'Computadora') => {
    return `${nombre} es bienvenido a la reunion`;
}

console.log(hi());
console.log(hi('Miguel'));
