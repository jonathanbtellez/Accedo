import { pokemonService } from "../services/pokemon.services.js";

/**
 * Method to create a pokemon card template to show each pokemon in the list
 * @param {String} name 
 * @returns Javascript template with the HTLM and JS needed to show the pokemon info.
 */
const createTemplate = (name) => {
    const templateCard =
        `<div class="card text-bg-dark px-5 mb-3;"  id="pokemon-card">
        <div class="card-body pokemon-card">
        <p class=" text-warning card-pokemon-title" id="pokemon-card-name">${name}</p>
        <a href="../../views/pokemonDetails.html" class="btn btn-secondary" id="pokemon-card-btn">Ver mas</a>
        </div>
    </div>`;
    templateCard;
    return templateCard;
}

/**
 * this method insert the template card in the HTLM view everytime that is called
 * @param {String} name 
 */
const createCard = (name) => {
    const card = document.querySelector("#pokemon-cards");
    const template = createTemplate(name);
    card.innerHTML += template;
}
/**
 * This method call brigth the information of the pokemons calling the getPokemons method of Pokemon.services
 */
const loadPokemons = async () => {
    const pokemons = await pokemonService.getPokemons();
    pokemons.forEach(pokemon => {
        const name = pokemon.name;
        createCard(name);
    });
}

/**
 * Returns a html template to show the pokemon details
 * @param {String} imgfront 
 * @param {String} name 
 * @param { Number } height 
 * @param {Array} moves 
 * @returns 
 */
const createTemplateDetails = (imgfront, name, height, moves) => {
    const templateCard = `
    <div class="card text-bg-dark m-0 text-center p-2" style="width: 80%">
        <div class="container-img-details">
            <img src="${imgfront}" class="card-img-top img-details" alt="${name}"/>
        </div>
        <div class="card-body text-center">
            <div class="text-center">
                <h2 class="card-title text-warning">Name:</h2>
                <h3 class="text-secondary">${name}</h3>
                <p class="card-text">
                    Height: ${height}
                </p>
            </div>
            <div class="text-start">
                <h3 class="text-center text-warning">Moves</h3>
                <ul>
                    <li><i class="bi bi-star-fill text-warning"></i> ${moves[0]}</li>
                    <li><i class="bi bi-star-fill text-warning"></i> ${moves[1]}</li>
                    <li><i class="bi bi-star-fill text-warning"></i> ${moves[2]}</li>
                    <li><i class="bi bi-star-fill text-warning"></i> ${moves[3]}</li>
                    <li><i class="bi bi-star-fill text-warning"></i> ${moves[4]}</li>
                </ul>
            </div>
        </div>
    </div>`
    return templateCard;
}

/**
 * Create a HTML element on the DOM
 * @param {String} imgfront 
 * @param {String} name 
 * @param { Number } height 
 * @param {Array} moves 
 * @returns 
 */ 
const createCardDetails = (imgfront, name, height, moves) => {
    const cardTemplate = document.querySelector("#card-pokemon-detail");
    const template = createTemplateDetails(imgfront, name, height, moves);
    cardTemplate.innerHTML = template;
}
/**
 * Method that do a filter in the pokemons list a return the url where is all pokemon data
 * @param {String} name 
 * @returns pokemon url
 */
const findPokemonURI = async (name) => {
    const pokemoms = await pokemonService.getPokemons();
    const pokemon = pokemoms.filter(pokemon => pokemon.name == name);
    console.log((pokemon[0].url));
    return pokemon[0].url;
}

/**
 * Returns the name parameter present in the URL
 * @returns 
 */
const getInformation = async () => {
    const currentURL = new URL(window.location);
    const name = currentURL.searchParams.get("name");
    return name;
}

/**
 * Returns the pokemon data saved in the API
 * @param {String} name 
 * @returns 
 */
const getPokemon = async (name) => {
    const polemonURL = await findPokemonURI(name);
    return await pokemonService.getPokemon(polemonURL);
}

/**
 * Use the method getPokemon to get pokemon data and the push this data to the funtion createCardDetails
 */
const loadPokemon = async (name) => {
    const moves = [];
    const pokemon = await getPokemon(name);
    const pokemonName = pokemon.name;
    const imgFront = pokemon.sprites.other.dream_world.front_default;
    const height = pokemon.height;
    moves.push(pokemon.moves[0].move.name);
    moves.push(pokemon.moves[1].move.name);
    moves.push(pokemon.moves[2].move.name);
    moves.push(pokemon.moves[3].move.name);
    moves.push(pokemon.moves[4].move.name);
    moves.push(pokemon.moves[0].move.name);
    createCardDetails(imgFront, pokemonName, height, moves);
}
export const pokemonController = {
    loadPokemons,
    getInformation,
    loadPokemon
}