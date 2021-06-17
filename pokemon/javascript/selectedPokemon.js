'use strict'

const pokeName = new URLSearchParams(window.location.search).get("name")
console.log(pokeName)
const pokemonName = document.querySelector(".pokemonName")

axios.get(`https://pokeapi.co/api/v2/pokemon`)
.then((response)=>{
    // console.log(response)
    for(let poke of response.data.results){
        if(poke.name === pokeName){
            axios.get(`${poke.url}`)
            .then((response)=>{
                printInfo(response.data)
            })
        }
    }
})
.catch((error)=>{
    console.error(error)
})

const printInfo = (data) => {
    console.log(data)
    printAbilities(data.abilities)
    printBasicInfo(data.name, data.height, data.weight)
    printMoves(data.moves)
}

const printBasicInfo = (name, height, weight) => {
    // console.log(name, height, weight)
    name = name[0].toUpperCase() + name.slice(1, name.length)
    const nameNode = document.createTextNode(name)
    pokemonName.appendChild(nameNode)

}

const printAbilities = (arrOfAbilities) => {
    for(let ability of arrOfAbilities){
        // console.log(ability.ability.name)
    }
}
const printMoves = (arrOfMoves) => {
    for(let move of arrOfMoves){
        // console.log(move.move.name)
    }
}