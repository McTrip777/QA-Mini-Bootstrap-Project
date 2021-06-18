'use strict'
const users = document.querySelector(".user")
const getIdParam = new URLSearchParams(window.location.search).get('id')

axios.get(`https://reqres.in/api/users/${getIdParam}`)
.then((response)=>{
    printToScreen(response.data.data)
})
.catch((error)=>{
    console.error(error)
})

const printToScreen = (node) => {
    let {id, first_name, last_name, email} = node

    const div = document.createElement('div')
    div.className = "p-2 m-2 alert alert-dark"

    const nodeValue = document.createTextNode(`${id}: ${first_name} ${last_name} - ${email}`)
    div.appendChild(nodeValue)
    users.appendChild(div)
}