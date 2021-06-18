'use strict'

const pokeName = new URLSearchParams(window.location.search).get("name")
const pokemonName = document.querySelector(".pokemonName")
const pokemonWeight = document.querySelector(".pokemonWeight")
const pokemonHeight = document.querySelector(".pokemonHeight")
const pokemonImg = document.querySelector(".pokemonImg")
const pokemonAbilities = document.querySelector(".abilities")
const pokemonMoves = document.querySelector(".moves")

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
    printSprite(data.sprites)
}

const printSprite = (imgUrl) => {
    // console.log(imgUrl.front_default)
    pokemonImg.src = imgUrl.front_default
}

const printBasicInfo = (name, height, weight) => {
    // console.log(name, height, weight)
    name = name[0].toUpperCase() + name.slice(1, name.length)
    const nameNode = document.createTextNode(name)
    pokemonName.appendChild(nameNode)

    const weightNode = document.createTextNode(weight)
    pokemonWeight.appendChild(weightNode)

    const heightNode = document.createTextNode(height)
    pokemonHeight.appendChild(heightNode)
}

const printAbilities = (arrOfAbilities) => {
    for(let ability of arrOfAbilities){
        // console.log(ability.ability)
        const ab = document.createElement("p")
        ab.className = "me-2 mt-2"
        const abNode = document.createTextNode(ability.ability.name)
        ab.appendChild(abNode)
        pokemonAbilities.appendChild(ab)
    }
}
const printMoves = (arrOfMoves) => {
    for(let move of arrOfMoves){
        // console.log(move.move.name)

        const m = document.createElement("p")
        m.className = "me-2 mb-0"
        const mNode = document.createTextNode(move.move.name)
        m.appendChild(mNode)
        pokemonMoves.appendChild(m)
    }
}