'use strict'

const pokemonContainerDiv = document.querySelector(".pokemon")
const pokemonSearch = document.querySelector(".search")

const getAllPokemon = (value) => {
    axios.get("https://pokeapi.co/api/v2/pokemon")
    .then((response)=>{
        for(let poke of response.data.results){
            console.log(value)
            // if(poke.name.includes(value) || value === ""){
                printToScreen(poke.name)
            // }
        }
    })
    .catch((error)=>{
        console.error(error)
    })
}

const printToScreen = (poke) => {
    const clickPokemon = document.createElement("a")
    clickPokemon.href = `pokemon.html?name=${poke}`
    clickPokemon.className = "btn btn-dark m-3"
    const pokemonName = document.createElement("h4")
    poke = poke[0].toUpperCase() + poke.slice(1, poke.length)
    const val = document.createTextNode(poke)
    pokemonName.appendChild(val)
    clickPokemon.appendChild(pokemonName)
    pokemonContainerDiv.appendChild(clickPokemon)
}
getAllPokemon()