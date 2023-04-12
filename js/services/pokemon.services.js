const URL = "https://pokeapi.co/api/v2/pokemon/";

/**
 * This method do a fetching of the pokemons that are in saved in the API
 * @returns A promise tha returns the pokemons
 */
const getPokemons = async () => { const response = await fetch(URL); const jsonData = await response.json(); return jsonData.results; }

const pokemon = await getPokemons();
console.table(pokemon);
/**
 * This method do a fetching of the pokemon information that are in saved in the API
 * @param {Number} idPokemon 
 * @returns 
 */
const getPokemon = async (idPokemon) => { const response = await fetch(URL + idPokemon); const jsonData = await response.json(); return jsonData; }
console.log(getPokemon(1))

export const pokemonService = {
    getPokemons,
    getPokemon
}