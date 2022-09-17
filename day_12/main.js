            //  LEVEL - 1

// 1. Calcula el ingreso total anual de la persona a partir del siguiente texto. "Gana 4000 euros de salario por mes, 10000 euros de bonificación anual, 5500 euros de cursos en línea por mes".
let unoEjercicio = 'He earns 4000 Euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month';
let expresion = /\d+/gi;
let ingresos = unoEjercicio.match(expresion);
ingresosTotal = ingresos.reduce((valorInicial, elemento) => valorInicial+parseInt(elemento), 0);
// console.log(ingresos);
// console.log(`Los ingresos totales son: ${ingresosTotal}`);


// 2. La posición de algunas partículas en el eje x horizontal -12, -4, -3 y -1 en la dirección negativa, 0 en el origen, 4 y 8 en la dirección positiva. Extraiga estos números y encuentre la distancia entre las dos partículas más lejanas.
let dosEjercicios = 'La posición de algunas partículas en el eje x horizontal -12, -4, -3 y -1 en la dirección negativa, 0 en el origen, 4 y 8 en la dirección positiva. Extraiga estos números y encuentre la distancia entre las dos partículas más lejanas.';
let expresionNumeros = /-?\d+/g
let numeros = dosEjercicios.match(expresionNumeros);
// console.log(numeros);
let numerosNumber = numeros.map((elemento) => parseInt(elemento)); // usamos map para obtener un array con numeros enteros.
// console.log(numerosNumber);
let distanciaMasLejana = parseInt(numerosNumber[numeros.length-1]) - parseInt(numerosNumber[0]);
// console.log(`La distancia mas lejana es de: ${distanciaMasLejana}`);


// 3. Escribe un patron el cual identificara si un string es valido para una variable de javascript.

// const variableValida = (variable) => {
//     let expresion = /[^0-9][a-zA-Z]*[^-]_?+/gi;
//     let valor = expresion.match(expresion);
//     if(valor != null){
//         return true;
//     }
//     return false;
// }
// let variableA = 'first_name';
// let variableB = 'first-name';
// let variableC = '1first_name';
// let variableD = 'firstname';
// let regex = /[^0-9-]\w+_?\w+/gi;
// console.log(variableD.match(regex));


            // LEVEL - 2

//  Cree un funcion q llamada palabras mas frecuentes y pase como argumento la cantidad de palabras q quieres q se repitan.

const palabrasFrecuentes = (arr, numPalabras) => {
    
    let expresion = /\w+/gi;
    let palabras = arr.match(expresion);
    let setPalabras = new Set(palabras);
    let datos = [];
    for(const pa of setPalabras){
        let cantidad = palabras.reduce((vi, elemento) => {
            if(elemento == pa){
                return vi+1;
            }
            return vi;
        },0);
        datos.push([pa, cantidad]);
    }

    let retorno = datos.filter((elemento) => elemento[1] > numPalabras);
    return retorno;
}


let frase = 'I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.';

console.log(palabrasFrecuentes(frase,0));