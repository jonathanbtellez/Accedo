import { userController } from "../controller/user.controller.js";
import { validations } from "./validations.js";
const showError = (message, form) => {
    form.classList.remove("invisible");
    const ul = document.createElement("ul");
    const template = `<li class="text-warning text-center"><i class="bi bi-exclamation-diamond"></i> ${message}</li>`
    ul.innerHTML += template
    form.appendChild(ul);
}



const btnLogin = document.querySelector("#btn-logIn");
btnLogin.addEventListener("click", async (e) =>{
    e.preventDefault();
    const formError = document.querySelector("#form-error");
    formError.innerHTML = "";
    
    //Form data
    const emailInForm = document.querySelector("#email").value;
    const passwordInForm = document.querySelector("#password").value;


    //Validations
    const isValidEmail = validations.validateEmail(emailInForm);
    const isValidPassword = validations.validatePassword(passwordInForm);

    let email;
    let password;

    isValidEmail !=  "true"?showError(isValidEmail, formError):email=emailInForm;
    isValidPassword !=  "true"?showError(isValidPassword, formError):password=passwordInForm;
    
    let user;
    if(email != undefined && password != undefined){
        await userController.createSessionUser(email, password).then(value => {
            user = value;
        })
    }
    if(user != null){
        userController.saveUserSession(user);
        console.log(user);
        location.href = "../index.html";
    }else{
        if(email != undefined && password != undefined){
            showError(validations.validateSesssionUser(),formError);
        }
    }
});