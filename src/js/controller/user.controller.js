import { userServices } from "../services/user.services.js";

/**
 * Save the user data in the localstorage
 * @param {User} user 
 */
const saveUserSession = (user) => {
    localStorage.setItem("user", JSON.stringify( user ));
}

/**
 * Delete the user data saved in the localstorage
 */
const deleteUserSession = ()=>{
    localStorage.removeItem("user");
}

/**
 * Returns the user data saved in the localstorage if there is not data, it will return null
 * @returns 
 */
const getUserSession = () =>{
   const user = JSON.parse(localStorage.getItem("user"));
    return user;
}

/**
 * Return a user to be saved in the localstore, keeping a session for a major time.
 * @param {String} email 
 * @param {String} password 
 * @returns 
 */
const createSessionUser =(email, password) =>{
    return userServices.createSessionUser(email,password);
}

/**
 * Returns a promise with the result of create a user in our db. 
 * @param {user} user 
 * @returns 
 */
const createUser = async(user)=>{
    return await userServices.createUser(user);
}

/**
 * Return a -HTML template to show information about the user or the buttons to signin/login
 * @param {user} user 
 * @returns 
 */
const createTemplateinfo = (user) => {
    let template;
    if(user != null){
        template = `<div class="btn-container text-light text-center px-5">
                        <h4>Bienvenido ${user.name}, disfruta de tu aventura pokemon</h4>
                        <a class="btn btn-warning my-2" id="close-session" href="./views/login.html"><i class="bi bi-door-open-fill">Cerrar sesion</i></a>
                    </div>`
    }else{
        template = 
        `<div class="btn-container d-flex justify-content-between my-4 px-5" id="btns-container">
            <a class="btn btn-warning" href="./views/signin.html"><i class="bi bi-plus-lg"></i> Registrate</a>
            <a class="btn btn-warning" href="./views/login.html"><i class="bi bi-box-arrow-right"> </i>Inicia sesion</a>
        </div>`;
    }
    return template;
}

/**
 * Create a HTMl component to show the info returned by templateuser
 * @param {user} user 
 */
const insertSessionInfo = (user)=>{
    const infoUser = document.querySelector("#info-container");
    infoUser.innerHTML += createTemplateinfo(user);
    if(user != null){
        const btnCloseSession = document.querySelector("#close-session"); 
        btnCloseSession.addEventListener("click",(e)=>{
            e.preventDefault();
            deleteUserSession();
            location.href = "./views/login.html";
        });    
    }
}
 

export const userController = {
    createUser,
    getUserSession,
    saveUserSession,
    createSessionUser,
    insertSessionInfo
}