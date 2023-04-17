import { userServices } from "../services/user.services.js";

const saveUserSession = (user) => {
    localStorage.setItem("user", JSON.stringify( user ));
}

const deleteUserSession = ()=>{
    localStorage.removeItem("user");
}


const getUserSession = () =>{
   const user = JSON.parse(localStorage.getItem("user"));
    return user;
}

const createSessionUser =(email, password) =>{
    return userServices.createSessionUser(email,password);
}

const createUser = async(user)=>{
    return await userServices.createUser(user);
}

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