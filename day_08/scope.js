//        Objetos Literales en javascritp
//      Los objetos en JS consta de propiedades y las propiedades tiene un clave y valor, no exites un orden pare estos, para crear un objeto literal usamos 2 llaves {}.
const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node',
      'MongoDB',
      'Python',
      'D3.js'
    ],
    getFullName: function() {
      return `${this.firstName} ${this.lastName}`
    },
    address: {
      street: 'ostria reyes',
      pobox: 233,
      city: 'sucre'
    }
  }

  console.log(person);
  console.log('-----------------------------------------');

//    Los objetos son mutables, y no solo podemos agregar datos tambien podemos crear funciones anonimas(no se puede crear arrow funciones) y en estas podemos hacer uso de 'this' q hace referencia al objeto en si mismo.


//  Agregando datos.
  person.nationality = 'Ethiopian'
  person.country = 'Finland'
  person.title = 'teacher'
  person.skills.push('Meteor')
  person.skills.push('SasS')
  person.isMarried = true
  


// Agregando un funcion al objeto.
  person.getPersonInfo = function() {
    let skillsWithoutLastSkill = this.skills
      .splice(0, this.skills.length - 1)
      .join(', ');
    let lastSkill = this.skills.splice(this.skills.length - 1)[0];
  
    let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`;
    let fullName = this.getFullName();
    let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`;
    return statement;
  }
  console.log(person);
  console.log(person.getPersonInfo());


  //  Metodos de Objetos
  //  hay diferentes metodos para manipular un objeto. Veamos algunos de ellos.


//  Objet.assig : copia un objeto sin q las modificaciones a la copia modifiquen al original.
const copyPerson = Object.assign({}, person);
copyPerson.firstName = 'Elias';
console.log(person.firstName);
console.log(copyPerson.firstName);


//  Objet.keys : Obtiene las llaves o propied

const keys = Object.keys(copyPerson);
console.log('-------- Llaves de un objeto literal -----------');
console.log(keys);

//  Objet.keys(objeto) : Obteniendo la llaves de un objeto dentro de otro objeto.
const address = Object.keys(copyPerson.address);
console.log(address);


//  Obteniendo valores de un objeto.
const values = Object.values(copyPerson);
console.log('------------ Valores de un objeto --------------');
console.log(values);


//  Object.entries(objeto): obteniendo llaves y valores en un array.
const entries = Object.entries(copyPerson);
console.log('------------- Llaves y Valores -------------------')
console.log(entries);

//  hasOwnProperty: Controlar si una llave especifica existe en un objeto.
console.log('--------- Controlando y un llave exites -------------');
console.log(copyPerson.hasOwnProperty('name'));
console.log(copyPerson.hasOwnProperty('lastName'));