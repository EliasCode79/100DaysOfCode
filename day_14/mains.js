// 1. errot de tipo de referencia
// 
// try{
    // console.log(numero);
// }catch(e){
    // console.log(e);
// }

// 2. error tipo : tipo de dato error
// let numero = 77;
// try{
    // numero.includes('hola');
// }catch(error){   // el parametro puede tener cualquier nombre
    // console.error(error.name);   // muestra el tipo de error
    // console.error(error.message);  // muestra el msj del error
// }finally{
    // console.log('el finally se ejecuta haya o no haya error');
// }
// 

//  3. error tipo: error de sintanxis
// try{
//     let numero = 2 x 2;
// }catch(e){
//     console.error(e.name);
//     console.error(e.message);
// }finally{
//     console.log('el finally se ejecuta, haya o no haya error');
// }


// throw .- es manejador de errores personalizado, si no cumple con las especificaciones q nosotros indiquemos, nos mostrara el error con el msj q nosostros hayamos declarado.
let errorThrow = (numero) => {
    try{
        if(numero == '') throw 'vacio';  // msj personalizado.
        if(isNaN(numero)) throw 'no es un numero';
        numero = Number(numero);
        if( numero < 5 ) throw 'es un numero menor q 5';
        if( numero > 10 ) throw 'es un numero mayor q 10';
    } catch(error) {
        console.log(error);
    }
}

errorThrow('hola');


