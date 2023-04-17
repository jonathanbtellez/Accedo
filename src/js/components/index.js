import { pokemonControlller } from "../controller/pokemon.controller.js";
import { userController } from "../controller/user.controller.js";

await pokemonControlller.loadPokemons();

const userActiveInfo = userController.getUserSession();
userController.insertSessionInfo(userActiveInfo);



const pokemonCards = document.querySelectorAll("#pokemon-card");
pokemonCards.forEach(pokemonCard => {
    const pokemonBtn = pokemonCard.querySelector("#pokemon-card-btn");
    const name = pokemonCard.querySelector("#pokemon-card-name");
    pokemonBtn.addEventListener("click", async (e) => {
        e.preventDefault();
        if(userActiveInfo != null){
            const pokemonName = name.textContent;
            location.href = `views/pokemonDetails.html?name=${pokemonName}`;
        }else{
            Swal.fire({
                title: 'Debes iniciar sesion para ver esta infomacion, que desea hacer?',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'Registrate',
                denyButtonText: `Iniciar sesion`,
              }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    location.href = "./views/signin.html";
                } else if (result.isDenied) {
                    location.href = "./views/login.html";
                }
              })
        }
    });
});

