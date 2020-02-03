const baseURL = "http://localhost:3000"

function submitData(name, email) {
    let user = {name: name, email: email};
    const postRequest = {
        method: "POST",
        headers: {
            "content-type": "application/json",
            accept: "application/json"
        },
        body: JSON.stringify(user)
    }

    return fetch(`${baseURL}/users`, postRequest)
        .then(response => response.json())
        .then(newUser => {
            document.body.innerHTML = document.body.innerHTML + " " + newUser.id;
        })
        .catch(error => {
            document.body.innerHTML = document.body.innerHTML + " " + error.message
        })
}
