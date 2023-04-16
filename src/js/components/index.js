import { pokemonControlller } from "../controller/pokemon.controller.js";

await pokemonControlller.loadPokemons();
const pokemonCards = document.querySelectorAll("#pokemon-card");
pokemonCards.forEach(pokemonCard => {
    const pokemonBtn = pokemonCard.querySelector("#pokemon-card-btn");
    const name = pokemonCard.querySelector("#pokemon-card-name");
    pokemonBtn.addEventListener("click", async (e) => {
        e.preventDefault();
        const pokemonName = name.textContent;
        location.href = `views/pokemonDetails.html?name=${pokemonName}`;
    });
});