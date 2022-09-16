const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]


//          LEVEL - 1
// 1. Desestructurar y asignar los elementos de la matriz de constantes a e, pi, gravity, humanBodyTemp, waterBoilingTemp.
const scientificConstants = [2.72, 3.14, 9.81, 37, 100];
let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = scientificConstants;
// console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp);

// 2. Desestructurar y asignar los elementos de la matriz de países a fin, est, sw, den, nor

let desCountries = (paises) => {
    let [fin, est, sw, den, nor] = paises;
    console.log(fin, est, sw, den, nor);
}

// desCountries(countries);

// 3. Desestructurar el objeto rectángulo por sus propiedades o claves.
let desRectangulo = ({width, height, area, perimeter}) => {
    console.log(width, height, area, perimeter);
}

// desRectangulo(rectangle);




//          LEVEL - 2
// 1. Iterar a través de la matriz de usuarios y obtener todas las claves del objeto mediante la desestructuración

let clavesDes = (obj) => {
    for(let elemento of obj){
        let {name, scores, skills, age} = elemento;
        console.log(name, scores, skills, age);
    }
}

// clavesDes(users);

// 2. Encuentre las personas q tienen menos de 2 habilidades.
let dosHabilidades = (obj) => {
    for(let elemento of obj){
        let {name, scores, skills, age} = elemento;
        if(skills.length < 2){
            console.log(name);
        }
    }
}

// dosHabilidades(users);

//          LEVEL - 3
// 1. Un desarrollador junior estructura el nombre del estudiante, las habilidades y la puntuación en una serie de matrices que pueden no ser fáciles de leer. Desestructura la siguiente matriz de nombre a nombre, matriz de habilidades a habilidades, matriz de puntuaciones a puntuaciones, puntuación de JavaScript a jsScore y puntuación de React a la variable reactScore en una línea.
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]];
let [nombre, habilidades, jsScore, reactScore] = student; 
// console.log(nombre);
// console.log(habilidades);
// console.log(jsScore);
// console.log(reactScore);

// 3. Escribir una funcion para convertir array en objetos.
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
  ];

const arrayToOjbeto = (array) => {
    let objeto = [];
    for(const elemento of array){
        let [nombre, skills, scores] = elemento;
        objeto.push({nombre, skills, scores});
    }
    return objeto;
}

let studiantesObjeto = arrayToOjbeto(students);
// console.log(studiantesObjeto);

// 4. copiar estudiantes y agregar nuevos elementos

const estudiantes = {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
      ],
      backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
      ],
      dataBase:[
        { skill: 'MongoDB', level: 7.5 },
      ],
      dataScience:['Python', 'R', 'D3.js']
    }
  }

let copyEstudiantes = {...estudiantes};
console.log(copyEstudiantes);
copyEstudiantes.skills.frontEnd.push({skill: 'Bootstrap', level: 8});
copyEstudiantes.skills.backEnd.push({skill: 'SQL', level: 9});
copyEstudiantes.skills.dataBase.push({skill: 'SQL', level: 8});
copyEstudiantes.skills.dataScience.push('SQL');

console.log(copyEstudiantes);
