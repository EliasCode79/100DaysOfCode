// foreach .- recorre los elementos de un array. Retorna undefined. Ejemplo: arreglo.forEach( function callback(valorDePosicion, posicionDelElemento, arreglo){ // operaciones; }). El parametro posicionDelElemento y arreglo son opcioneales.

// map .- Tiene los mismo parametros q forEach pero este devuelve un nuevo array con los resutaldos con las modificaciones q nosostros hagamos en la funcion (callback). Map no modifica el array original en el q es llamado (aunque el callback, si es llamada, puede modificarlo).gggggg

// filter.- Tiene los mismo parametros q forEach pero este este devuelve un nuevo array q con los elementos q cumplan ciertan condicion.


// reduce.- ejecuta una funcion reductora sobre cada elemento de un array, devolviendo como resultado un unico valor. El valor devuelto de la función reductora se asigna al acumulador, cuyo valor se recuerda en cada iteración de la matriz y, en última instancia, se convierte en el valor final, único y resultante. Ejemplo: 
// arr.reduce(callback(acumulador, valorActual[, índice[, array]])[, valorInicial]) .

//  [0,1,2,3,4].reduce(function(valorAnterior, valorActual, indice, vector){
//   return valorAnterior + valorActual;
// });


// 2. Define un funciont callback antes de usar dentro forEach, map, filter, or reduce.
const callBack = (argumento) => {
    console.log(argumento);
    // return 1;
}

// 3. usea forEach to console.log para mostrar cada pais de un array de paises.
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
];

// countries.forEach(callBack);

// 4. use forEach para mostrar cada nombre de un array nombre
const nombres = ['elias', 'luis', 'miguel', 'lia', 'risa', 'Estefani'];
// nombres.forEach(callBack);

// 5.user forEach para mostrar cada numbero de un array de numeros
const numeros = [0,1,2,3,4,4,5,6,7];
// numeros.forEach(callBack);

// 6.usa map para crear un nuevo array con cada pais en mayusculas.
const countriesUpper = countries.map((country) => {
    return country.toUpperCase();
})

// countriesUpper.forEach(callBack);

// 7. use countries para crear un array q contengan las longitudes del array countries.
const tamanioCountries = countries.map((country) => country.length );
// tamanioCountries.forEach(callBack);

// 8. use map para crea un array con los elementos del array numeros al cuadrado.
const numerosCuadrado = numeros.map(numero => numero**2);
// numerosCuadrado.forEach(callBack);


// 9. usa map para cambiar cada nombre a nombres mayuculas en un nuevo array.
const nombreUpper = nombres.map((nombre) => nombre.toUpperCase());
// nombreUpper.forEach(callBack);

// 11. usa filtet para seleccionar los paises  q tenga land.
countriesLand = countries.filter((country) =>  country.includes('land') )

// countriesLand.forEach(callBack);

// 12. usar filter para filtrar los paises q tenga 6 caracteres
countriesSix = countries.filter((country) => { return country.length === 6 })
// countriesSix.forEach(callBack);

// 13. usar filter para paises q tenga 6 caracteres o mas.
countriesSixMore = countries.filter((country) => { return country.length >= 6 })
// countriesSixMore.forEach(callBack);

// 14. usa filter para filter los paises q comienzan con 'E'
countriesE = countries.filter((country) => { return country.startsWith('E') });
// countriesE.forEach(callBack);


// 16. Declare una función llamada getStringLists que toma una matriz como parámetro y luego devuelve una matriz solo con elementos de cadena.
//  Primera forma.
const getStringLists = (arr) => {
	return arr.filter((elemento) => typeof elemento === 'string')
}

//  Segunda forma.
const getStringListsTwo = (arr) => {
	let newArr = [];
	for(const elemento of arr){
		if(typeof elemento === 'string'){
			newArr.push(elemento);
		}
	}
	return newArr;
}

let prueba = [23, 23, 34, 'hola', 2.32, 'mundo'];
// console.log(getStringLists(prueba));
// console.log(getStringListsTwo(prueba));

// 17. usa reduce para suma todo los numeros de un array de numeros.
const sumaNumeros = numeros.reduce((valorInicial, elemento) => valorInicial+elemento, 0);
// console.log(sumaNumeros);

// 18. Use reduce para concatenar todos los países y producir esta oración: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries.

const concatCountries = countries.reduce((valorInicial, elemento, posicion, arr) => {
	let tamanio = arr.length-1;
	if(tamanio == posicion){
		return `${valorInicial} and ${elemento} are north European countries`;
	}
	return `${valorInicial}${elemento}, `;
} ,'');

// console.log(concatCountries);


// 19. explique la diferencia entre some y very: los 2 devuelven un boolenao, la diferencia es q some devuelve 'true' si algun elemento cumple la condicion q le indiquemos, mientras q para 'every' todos tiene q cumplir con la condicion para q devuelva un 'true'.

// 20. Usa some para controlar si algunos de los nombres tiene mas de 7 caracteres de largo
const nombreLongSeven = nombres.some((elemento) => elemento.length > 7);
// console.log(nombreLongSeven);

// 21. user every para verificar si todos los paises contiene la palabra 'land'.
const everyLand = countries.every((elemento) => elemento.includes('land'));
// console.log(everyLand);

// 22. Explique la diferencia entre 'find' y 'findIndex'
// retorno el elemento q satisfaga la condicion y findIndex retorno la posicion satisfaga la posicion.

// 23. use find para encontrar el primer pais q contengan 6 caracteres.
const countrySixCaracteres = countries.find((elemento) => elemento.length == 6);
// console.log(countrySixCaracteres);

// 24. use finIndex para encontrar la posicion del primer pais q contenga 6 caracteres.
const posicionCountrySix = countries.findIndex((elemento) => elemento.length == 6);
// console.log(posicionCountrySix);

// 25. use findIndex para encontrar la posicion de 'Norway' si no existe obtendra -1.
const posicionNorway = countries.findIndex((elemento) => elemento == 'Norway');
// console.log(posicionNorway);
// console.log(countries[posicionNorway]);

// 26. use findIndex para encontrar la posicion de Russia si no existen obtendra -1.
const posicionRussia = countries.findIndex((elemento) => elemento=='Bolivia');
// console.log(posicionRussia);
// console.log(countries[posicionRussia]);

//   Nivel 2 
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

// 1. Encuentre el precio total de los productos pueden usar mas de funcion de orden superios.
// 1 usamos map para obtener todos los prices de products.
// 2 usamos filter para obtener un nuevo array solo con los elementos q sean tipo 'number'.
// 3 usamos reduce para sumar todos los prices.
const sumTotalProducts = products.map((elemento) => elemento.price).filter((elemento) => typeof elemento == "number" ).reduce((valorInicial, elemento) => valorInicial + elemento, 0 );
// console.log(sumTotalProducts);


// Your output should look like this
paises = [
{country: 'English',count:91},
{country: 'French',count:45},
{country: 'Arabic',count:25},
{country: 'Spanish',count:24},
{country:'Russian',count:9},
{country:'Portuguese', count:9},
{country:'Dutch',count:8},
{country:'German',count:7},
{country:'Chinese',count:5},
{country:'Swahili',count:4}
];

// Your output should look like this
// console.log(mostSpokenLanguages(countries, 3))
[
{country: 'English',count: 91},
{country: 'French',count: 45},
{country: 'Arabic',count: 25}
];


// 2. Encuentra los 3 paises mas hablados.

const lenguasMasHabladas = (arr, cantidad) => {
	let paises = [];
	arr.sort((a,b) => {
		if(a['count'] > b['count']) return -1;
		if(a['count'] < b['count']) return 1;
		return 0;
	});
	for(let i=0; i<cantidad; i++){
		paises.push(arr[i]);
	}
	return paises;
}


console.log(lenguasMasHabladas(paises, 5));