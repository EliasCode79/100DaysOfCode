const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

// 1.  cree un set vacio.
const emptySet = new Set();
// console.log(emptySet);
// 2. crea un set q contenga valorde del 0 al 10 usando un iterador.
for(let i=0; i<11; i++){
    emptySet.add(i);
}
// console.log(emptySet);

// 3. Eliminar un elemento del set.
emptySet.delete(5);
// console.log(emptySet);


// 4. Limpia todo el set.
emptySet.clear();
// console.log(emptySet);

//  5. crea un set de 5 elementos String de un array.
let stringArray = ['HolaMundo', 'Risa', 'Lia', 'Laptop', 'Tzuyu'];
// console.log(stringArray);
// const setString = new Set(stringAr   ray);
// console.log(setString);

// 6. Crear un map de países y número de caracteres de un país

const mapCountries = new Map();
mapCountries.set('Bolivia', 27);    // los map tiene clave y valor.
mapCountries.set('Argentina', 27);  // con set agregamos nuevos elementos
mapCountries.set('Japon', 128);
// console.log(mapCountries);

        // LEVEL - 2
// 1. Encontrar la union de a y b
let union = [...a, ...b]; // unimo los 2 arreglos.
// console.log(union);
let UNION = new Set(union);  // hacemos q los valores sean unicos con set.
// console.log(UNION);
        
        
// 2. Encuentra la intersicion de a y b.
const valoresA = new Set(a);
const valoresB = new Set(b);
let c = a.filter((num) => valoresB.has(num));
let C = new Set(c);     // Nuevamente hacemos un set para obtener valores unicos ya q es posible q en el vector 'a' haya numeros repetidos, asi q haciendo set del resultado del filter tendremos valores q hay en los 2 vectores.
// console.log(C);
