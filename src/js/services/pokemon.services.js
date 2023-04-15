import { pokemonRepository } from "../repository/pokemon.repository.js";

/**
 * This method called the method getPokemons in the class pokemon controller to be use
 * let us insert the business logic in this class
 */
const getPokemons = async () => { return pokemonRepository.getPokemons() }

/**
 * This method called the method getPokemon in the class pokemon controller to be use
 * let us insert the business logic in this class
 */
const getPokemon = async (pokemonUrl) => { return  pokemonRepository.getPokemon(pokemonUrl) }

export const pokemonService = {
    getPokemons,
    getPokemon
}