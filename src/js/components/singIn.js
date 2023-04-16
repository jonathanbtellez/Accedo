import { userController } from "../controller/user.controller.js";
import User from "../models/user.class.js";
import { validations } from "./validations.js";
const showError = (message, form) => {
    form.classList.remove("invisible");
    const ul = document.createElement("ul");
    const template = `<li class="text-warning text-center"><i class="bi bi-exclamation-diamond"></i> ${message}</li>`
    ul.innerHTML += template
    form.appendChild(ul);
}



const btnSingIn = document.querySelector("#btn-singIn");
btnSingIn.addEventListener("click", (e) =>{
    e.preventDefault()
    const user = new User();
    const formError = document.querySelector("#form-error");
    formError.innerHTML = "";
    
    //Form data
    const nameInForm = document.querySelector("#name").value;
    const emailInForm = document.querySelector("#email").value;
    const passwordInForm = document.querySelector("#password").value;


    //Validations
    const isValidName = validations.validateName(nameInForm);
    const isValidEmail = validations.validateEmail(emailInForm);
    const isValidPassword = validations.validatePassword(passwordInForm);


    isValidName !=  "true"?showError(isValidName, formError):user.setName(nameInForm);
    isValidEmail !=  "true"?showError(isValidEmail, formError):user.setEmail(emailInForm);
    isValidPassword !=  "true"?showError(isValidPassword, formError):user.setPassword(passwordInForm);
    if(user.getEmail != undefined && user.getEmail != undefined && user.getEmail != undefined){
        console.log(user);
        userController.createUser(user);
    }
});