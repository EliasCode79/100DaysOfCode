// datos mandados con la solicutud POST
// const fetch = require('node-fetch');
// fetch('https://jsonplaceholder.typicode.com/posts', {
    // method: "POST",
    // body: JSON.stringify(_datos),
    // headers: {"Content-type": "application/json; charset=UTF-8"}
//   })
// .then(response => response.json())
// .then(json => console.log(json))
// .catch(err => console.log(err));

// const url = 'https://restcountries.com/v2/all' // countries api
// fetch(url)
//   .then(response => response.json()) // accessing the API data as JSON
//   .then(data => {
//     // getting the data
//     console.log(data)
//   })
//   .catch(error => console.error(error)) // handling error if something wrong happens

// const square = async function (n) {
//     return n * n
//   }
  
//   const valor = await square(2);
//   console.log(valor);
const url = 'https://restcountries.com/v2/all'
const fetchData = async () => {
    try {
      const response = await fetch(url)
      const countries = await response.json()
      console.log(countries)
    } catch (err) {
      console.error(err)
    }
  }
  console.log('===== async and await')
  fetchData()