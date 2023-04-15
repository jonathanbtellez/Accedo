const URL = "https://pokeapi.co/api/v2/pokemon/";

/**
 * This method do a fetching of the pokemons that are in saved in the API
 * @returns A promise tha returns the pokemons
 */
const getPokemons = async () => { const response = await fetch(URL); const jsonData = await response.json(); return jsonData.results; }

/**
 * This method do a fetching of the pokemon information that are in saved in the API
 * @param {Number} idPokemon 
 * @returns 
 */
const getPokemon = async (pokemonUrl) => { 
    const response = await fetch(pokemonUrl); 
    const jsonData = await response.json(); 
    return jsonData; 
}

export const pokemonRepository = {
    getPokemons,
    getPokemon
}