let iterador=0;
// while(iterador < 11){
//     console.log(iterador)
//     iterador++;
// }

// iterador = 1;
// let impresion='#';
// do{
//     console.log(impresion);
//     impresion = impresion +"#";
//     iterador++;
// }while(iterador <=10);

for(let i=0; i<11; i++){
    console.log(`${i} * ${i} = ${i*i}`);
}

console.log('Numeros pares');
for(let i=0; i<=100; i+=2){
    console.log(i);
}

console.log('Numeros impares');
for(let a=1; a<=100; a+=2){
    console.log(a);
}
// console.log('Numeros primos');
// for(let b=0; b<= 100; b++){
//     for(let c=2; c<=b/2; c++){
//         if( b%c==0 ){
//             break;
//         }else{
//             console.log(b);
//             break;
//         }
//     }
// }