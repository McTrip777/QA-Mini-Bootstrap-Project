'use strict'

const users = document.querySelector(".users")

//user
const inputName = document.querySelector("#name")
const inputJob = document.querySelector("#job")

//register
const inputEmail = document.querySelector("#email")
const inputPassword1 = document.querySelector("#password1")
const inputPassword2 = document.querySelector("#password2")

//login
const inputEmailLogin = document.querySelector("#loginEmail")
const inputPassword = document.querySelector("#password")


// User Values
// avatar: "https://reqres.in/img/faces/1-image.jpg"
// email: "george.bluth@reqres.in"
// first_name: "George"
// id: 1
// last_name: "Bluth"
const getAllUsers = () => {
    users.innerHTML = ""
    axios.get("https://reqres.in/api/users")
    .then((response)=>{
        for(let user of response.data.data){
            printToScreen(user)
        }
    })
    .catch((error)=>{
        console.error(error)
    })
}

const addUser = () => {
    if(inputName.value === "" || inputJob.value === "") 
        alert("Please complete input")
    else{
        axios.post("https://reqres.in/api/users", 
        {
            "name": `${inputName.value}`,
            "job": `${inputJob.value}`
        })
        .then((response)=>{
            console.log(response)
            alert(`User was added successfully!, response - ${response.status}, ${response.data.name}, ${response.data.job}`)
        })
        .catch((error)=>{
            console.error(error)
        })
    }
}

// https://reqres.in/api/register

// Working post infromation
// "email": "eve.holt@reqres.in",
// "password": "pistol"

const registerUser = () => {
    if(inputEmail.value === "" || inputPassword1.value === "" || inputPassword2.value === ""){
        alert("Please complete input")
    } 
    else if(inputPassword1.value !== inputPassword2.value) 
    alert("Passwords must match")
    else{
        console.log(inputEmail.value,inputPassword1.value,inputPassword2.value)
        axios.post("https://reqres.in/api/register", 
        {
            "email": `${inputEmail.value}`,
            "password": `${inputPassword1.value}`
        })
        .then((response)=>{
            console.log(response)
            // alert(`User was added successfully!, response - ${response.status}, ${response.data.name}, ${response.data.job}`)
        })
        .catch((error)=>{
            console.error(error)
        })
    }
}

// Working Login Info
// "email": "eve.holt@reqres.in",
// "password": "cityslicka"
const loginUser = () => {
    if(inputEmailLogin.value === "" || inputPassword.value === ""){
        alert("Please complete input")
    } 
    else{
        axios.post("https://reqres.in/api/login", 
        {
            "email": `${inputEmailLogin.value}`,
            "password": `${inputPassword.value}`
        })
        .then((response)=>{
            console.log(response.data.token)
            window.localStorage.setItem("token", response.data.token);
            if(window.localStorage.getItem("token") !== "")
                alert("You have been logged in")
        })
        .catch((error)=>{
            console.error(error)
        })
    }
}

const printToScreen = (node) => {
    let {id, first_name, last_name, email} = node

    const div = document.createElement('div')
    div.className = "p-2 m-2 alert alert-dark"

    const userSelect = document.createElement('a')
    userSelect.href = `singleRecord.html?id=${id}`

    const nodeValue = document.createTextNode(`${id}: ${first_name} ${last_name} - ${email}`)
    div.appendChild(nodeValue)
    userSelect.appendChild(div)
    users.appendChild(userSelect)
}