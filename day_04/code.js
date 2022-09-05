//      Ejercicios - Nivel 1
// let edad = prompt('Introduzca su edad');
// if( edad > 18){
//     console.log('Ustede es mayor de edad');
// }else{
//     console.log(`A usted le falta ${18 - edad} años para conducir`);
// }



// let miEdad = prompt('Mi edad');
// let tuEdad = prompt('Tu edad');
// if(miEdad > tuEdad){
    // console.log(`Yo soy mayor con ${miEdad - tuEdad} años q tu`);
// } else{
    // console.log(`Tu eres mayor q mi con ${tuEdad - miEdad} años`);
// }



// let a = 4;
// let b = 5;
// if(a > b) {
//     console.log(`${a} es mayor q ${b}`);
// }else{
//     console.log(`${b} es mayor q ${a}`);
// }

// console.log('Segunda forma');
// a > b ? console.log(`${a} es mayor q ${b}`): console.log(`${b} es mayor q ${a}`);


// let numero = prompt('Introduzca un numero');
// if(numero % 2 ==0){
//     console.log(`${numero} es par`);
// }else{
//     console.log(`${numero} es impar`);
// }


//          Ejercicios - Nivel 2
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

// let nota = prompt('Introducir su nota');
// if( nota >= 80 && nota <=100){
//     console.log('A');
// }else if( nota >= 70 ){
//     console.log('B');
//     }
//     else if( nota >= 60){
//         console.log('C');
//     } else if( nota >= 50 ){
//         console.log('D');
//     } else if( nota >= 0){
//         console.log('F');
//     } else{
//         console.log('Nota no valida');
//     }



// let mes = prompt('Introduzaca el mes actual');
// mes = mes.toLowerCase();
// switch(mes){
//     case 'septiembre':
//     case 'octubre':
//     case 'noviembre': console.log('Otoño');
//         break;
//     case 'diciembre':
//     case 'enero':
//     case 'febrero': console.log('Invierno');
//         break;
//     case 'marzo':
//     case 'abril':
//     case 'mayo': console.log('Primavera');
//         break;
//     case 'junio':
//     case 'julio':
//     case 'agosto': console.log('Verano');
//     default: console.log('mes no valido');
// }

//          Ejercicios - Nivel 3

// let dia = prompt('Introduzca el dia actual');
// dia = dia.toLowerCase();
// switch(dia){
    // case 'lunes':
    // case 'martes':
    // case 'miercoles':
    // case 'jueves':
    // case 'viernes': console.log(`${dia} se trabaja`); 
        // break;
    // case 'sabado':
    // case 'domingo': console.log(`${dia} es fin de semana`);
        // break;
    // default: console.log('Dia no valido');
// }

let mes = prompt('Introduzca el mes q desea consultar');
mes = mes.toLowerCase();
mes = mes.replace(mes[0], mes[0].toUpperCase());
let now = new Date();
