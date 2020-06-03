// Add your code here

// let formData = {
//   dogName = "Jackie-O",
//   dogBreed = "Monkey Dog"
// }
// configObj = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   },
//   body: JSON.stringify(formData)
// };

// fetch("http://localhost:3000/dogs", configObj)
// .then(function(resp) {
//   return resp.json()
// })
// .then(function(object) {
//   console.log(object)
// })
// .catch(function(error) {
//   alert("didn't werk!")
//   console.log(error.message)
// })


// formData = {
//   name: 'jay',
//   email: 'jay@me.com'
// }

function submitData(name, email) {
return fetch("http://localhost:3000/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify({
    name, 
    email
})
})

.then( function ( response ) {
  return response.json()
} )
.then( function ( object ) {
  document.body.innerHTML = object[ "id" ]
} )
.catch( function ( error ) {
  document.body.innerHTML = error.message
} )
}