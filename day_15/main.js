//          LEVEL - 1
// 1. crea una clase animal q tenga nombre, edad, color y numeros de patas y crea diferentes metodos.
class Animal{
    constructor(nombre, edad, color, numeroPatas){
        this.nombre = nombre;
        this.edad = edad;
        this.color = color;
        this.numeroPatas = numeroPatas;
    }

    get getNombre(){        // metodo get en javascript a esta la invocamos de la sgt manera: nombreObjeto.getNombre       --> los parentesis no hay q escribirlos.
        return this.nombre;
    }
    getDatos(){             // metodo para obtener los datos, a esta la invocamos de la siguiente manera: nombreObjeto.getDatos();
        let datos = `${this.nombre} tiene ${this.edad} años y es de color ${this.color} y tiene ${this.numeroPatas} patas`;
        return datos;
    }

    setNombre(nuevoNombre){     // metodo set para modificar el nombre.
        this.nombre = nuevoNombre;
    }
}

// const perro = new Animal('dover', 10, 'negro', 4);
// console.log(perro.getDatos());
// perro.setNombre('caliman');
// console.log(perro.getDatos());
// console.log(perro.getNombre);
// 
// const gato = new Animal('lilo', 2, 'gris', 4);
// console.log(gato.getDatos());

// 2. Crea un clase perro y un gato de la clase Animal.
class Perro extends Animal{
    constructor(nombre, edad, color, numeroPatas, comidaFavorita){
        super(nombre, edad, color, numeroPatas);
        this.comidaFavorita = comidaFavorita;
    }

    getDatosPerro(){
        let datos = this.getDatos() + ` su comida favorita es: ${this.comidaFavorita}`;
        return datos;
    }
}


class Gato extends Animal{
    constructor(nombre, edad, color, numeroPatas, juegoFavoritao){
        super(nombre, edad, color, numeroPatas);
        this.juegoFavoritao = juegoFavoritao;
    }

    getDatosGato(){
        let datos = this.getDatos() + ` su juego favorito es: ${this.juegoFavoritao}`;
        return datos;
    }
}


const caliman = new Perro('Caliman', 2, 'negro con amarillo', 4, 'hueso de pollo');
const lilo = new Gato('lilo', 1, 'gris oscuro', 4, 'cazar ratas');

console.log(caliman.getDatosPerro());
console.log(lilo.getDatosGato());

