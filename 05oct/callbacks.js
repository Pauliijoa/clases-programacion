/*
const saludar = (nombre) => {
    alert ('hola' + nombre) ;
}

const procesarEntradaUsurio = (callback) => {
    var nombre = prompt ('pnr favor ingresa tu nombre.');
    callback(nombre);


}
procesarEntradaUsurio(saludar);
*/

const cuandoLlegueElpokemon = (pokemon) => {
    console.log(pokemon.sprites.front_default)
    const image = document.getElementById("pokemon-image")
    image.src = pokemon.sprites.front_default
}
const pokemonNme = prompt('elige tu pokemon:')

fetch('https://pokeapi.co/api/v2/pokemon/' + pokemonNme)
    .then(response => response.json())
    .then(cuandoLlegueElpokemon);











