// LEVEL - 1   
// 1. Use console.table para imprimir un array.
let paises = ['Argentina', 'Bolivia', 'Chile', 'Brasil', 'Colombia'];
// console.table(paises);

let objetoPaises = {
    bolivia: 'sucre',
    argentina: 'Buenos Aires',
    japon: 'tokyo',
    coreaDelSur: 'Seul',
    china: 'Pekin',
    alemania: 'berlin',
    singapur: 'singapur'
}


// 2. use un console.table para imprimir un objeto.
console.table(objetoPaises);


// 3. use un console.group para imprimir grupos.
let users = {
    elias: 'ing. sistemas',
    lia: 'dancer',
    lisa: 'cantante',
    johnCena: 'luchador',
    cristiano: 'jugador de futbol',
    minami: 'actriz',
    mayu: 'model',
    suzu: 'actor anime'
}

console.group('usuarios');
console.log(users);
console.groupEnd();

// LEVEL - 2
// 1. muestra un msj con console.assert q la condicion devuelva un valor falso para q se muestre el msj.
console.assert(10 > 2*10,'NO es mayor es de igual valor');

// 2. muestra un mensaje de aviso console.warn()
console.warn('Este es un aviso');

// 3. Escribe un msj de erro con console.error()
console.error('Este es un msj de console.error("msj")');


// LEVEL - 3
// 1. Verifica si diferenica de velocidad q hay entre los diferentes iteradores.
let n=0;

console.time('while');
while(n<100){
    n++;
}
console.timeEnd('while');
console.time('for');
for(let i=0; i<100;i++){
}
console.timeEnd('for');

