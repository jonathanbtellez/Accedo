import { pokemonController } from "../controller/pokemon.controller.js";

const pokemon = await pokemonController.getInformation();
await pokemonController.loadPokemon(pokemon);