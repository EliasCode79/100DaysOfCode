const volumeOfRectPrism = function (altura, ancho, profundidad){
    return altura * ancho * profundidad;
}

console.log(volumeOfRectPrism(20,20,20));

const circumOfCircle = function(radio){
    return Math.PI * radio * 2;
}

console.log(`La circunferencia es: ${circumOfCircle(5)}`);

const peso = (masa, gravedad = 9.8) => {
    return masa * gravedad;
}

let masa = 72;
console.log(`El de peso de un objeto q tiene una masa de ${masa} es: ${peso(masa)} m/s²`);

// metodo para sacar el 'indice de masa corporal'
const bmi = (altura, masa) => {
    return masa / (altura * altura);
}


console.log(`Mi masa es de ${masa} y mi indice corporal es de: ${bmi(1.75, masa)}`);

// buscar el maximo valor de 3 elementos
const findMax = (primero, segundo, tercero)=>{
    if(primero > segundo){
        if(primero > tercero){
            return primero;
        } else{
            return tercero;
        }
    } else if( segundo > tercero){
        return segundo;
    } else{
        return tercero;
    }
}

console.log(`El mayor valor de (7,8,5) es: ${findMax(7,8,5)}`);


const printArray = function(arr){
    for (const iterator of arr) {
        console.log(iterator);
    }
}

let nombre = ['elias', 'miguel', 'lia', 'itzy', 'yuna', 'yeji'];

printArray(nombre);

// Invertir un array
const reverseArray = (arr) => {
    let invertido = [];
    for(let i=arr.length-1 ; i>=0 ; i--){
        invertido.push(arr[i]);
    }
    return invertido;
}

console.log(reverseArray(nombre));

// generador de ID
const userIdGenerator = () =>{
    let caracteres = ['a','b', 'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let arreglo =[];
    for(i=0; i<7; i++){
        arreglo.push(caracteres[Math.round(Math.random()*27)]);
    }
    let id = arreglo.toString();
    // id.replace(',');
    return id;
}

console.log(userIdGenerator());