// 1. Almacena tu nombre apellido  edad pais y ciudad
let firstName = 'Elias';
let lastName = 'Franco';
let age = 24;
let country = 'Bolivia';
let city = 'Sucre';

localStorage.setItem('firstName', firstName);
localStorage.setItem('lastName', lastName);
localStorage.setItem('age', age);
localStorage.setItem('country', country);
localStorage.setItem('city', city);



// 2. Crea un objeto estudiante y almacenalo en el localStorage.
let student = {
    firstName: 'lia',
    lastName: 'itzy',
    age: 24,
    skills: ['html', 'CSS', 'JS', 'NODE', 'REACT'],
    country: 'Belgica'
}

let txtStudent = JSON.stringify(student, undefined, 4);
localStorage.setItem('student', txtStudent);
localStorage.setItem('estudiante', student);

// 3. Crea un objeto llamado personaCuenta. Tiene las propiedades nombre, apellido, ingresos, gastos y tiene los métodos totalIncome, totalExpense, accountInfo,addIncome, addExpense y accountBalance. Ingresos es un conjunto de ingresos y su descripción y gastos es también un conjunto de gastos y su descripción
let personaCuenta = {
    nombre: 'Lisa',
    apellido: 'Oribe',
    ingresos: 1000,
    gastos: 800,
    totalIngresos: function(ingreso){
        return this.ingresos += ingreso;
    },
    totalGastos: function(gasto){
        this.ingresos -=gasto;
    }
}

let personaCuentatxt = JSON.stringify(personaCuenta, undefined, 4);
localStorage.setItem('cuentaPersona', personaCuentatxt);