import { pokemonControlller } from "../controller/pokemon.controller.js";

const pokemon = await pokemonControlller.getInformation();
console.log(pokemon);
await pokemonControlller.loadPokemon(pokemon)