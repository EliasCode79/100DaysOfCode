const dog = {};
// console.log(`------------ Objeto dog vacio -----------\n${dog}`);

dog.name = 'Dover';
dog.legs = 4;
dog.color = 'negro';
dog.ladrar = function(){ return 'woof woof'};
// console.log('---- datos del perro -------');
// console.log(`nombre: ${dog.name}\npiernas: ${dog.legs}\ncolor: ${dog.color}\nladrar: ${dog.ladrar()}`);


const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python','HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node', 'SASS'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
}

// console.log(users.Paul.skills.length);
// console.log('---------  la otra forma --------');
// console.log(users);


function getUserSkills(objeto){
    let newUser = {};    
    let nroSkill = 0;
    let nombre='';
    for (const user in objeto) {
        let tamanio = objeto[user]['skills'].length;
        if(tamanio >= nroSkill){
            newUser = Object.assign({}, objeto[user]);
            // console.log(newUser);
            nroSkill = newUser['skills'].length;
            nombre = user;
        }        
    }   
    newUser.name = nombre;
    return newUser;
}


// console.log(`El usuario con mas skills es :`);
// console.log(getUserSkills(users));

const logIng = (objeto) => {
    let contador=0;
    for (const iterator in objeto) {
        let logIn = objeto[iterator].isLoggedIn;
        let points = objeto[iterator].points;
        if(logIn == true && points > 49){
            contador++;
        }
    }
    return contador;
}

// console.log(`Hay ${logIng(users)} usuarios q esta logeados y tiene mas de 49 puntos`);

// falta resolver
const mern = (objeto) => {
    
}

const setNombre =(objeto) => {
    let copyUser = Object.assign({}, users);
    copyUser.elias = {
        email: 'Eliasfranco@gmail.com',
        skills: ['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'NODE'],
        age: 24,
        isLoggedIn: true,
        puntos: 51
    }
    return copyUser;
}

let addUsuarios = setNombre(users);
// console.log(addUsuarios);


//  Funcion para obtener llaves y propiedades
const getKeyAndProperties = (objeto) => {
    return Object.entries(objeto);
}

// console.log(getKeyAndProperties(users));

//  Funcion para obtener los valores de un Objeto Literal
const getValues = (objeto) => {
    return Object.values(objeto);
}

// console.log(getValues(users));


const country = {
    argentina: {
        capital: 'Buenos Aires',
        poblacion: 40000000,
        lenguaje: 'español'
    },
    bolivia: {
        capital: 'sucre',
        poblacion: 10000000,
        lenguaje: 'español'
    },
    colombia: {
        capital: 'bogota',
        poblacion: 40000000,
        lenguaje: 'ingles'
    },
    alemania: {
        capital: 'berlin',
        poblacion: 60000000,
        lenguaje: 'aleman'
    }
}


const printData = (objeto) => {
    for (const key in objeto) {
        console.log(`${key} su capital es: ${objeto[key].capital} su lenguaje es ${objeto[key].lenguaje} y tien una poblacion de ${objeto[key].poblacion}`);
    }
}

// printData(country);

const usuarios = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]


const signUp = (objeto) => {
    let nombre = prompt('Introduzca su nombre');
    let mail = prompt('Ingrese su email');
    for(let i=0; i < objeto.length; i++){
        if(nombre == objeto[i]['username'] && mail == objeto[i]['email']){
            return 'Esta cuenta ya existe';
        }
    }
    let password = 'hola mundo';
    let ahora = new Date();
    ahora = ahora.getDate();
    let isLogIn = true;

    let objetoLiteral = { 
        _id: 'abad',
        username: nombre,
        email: mail,
        password: password,
        createdAt: ahora,
        isLoggedIn: isLogIn
    }

    objeto.push(objetoLiteral);
    return 'Nuevo usuario agregado.';
}

console.log(signUp(usuarios));
console.log(usuarios);





