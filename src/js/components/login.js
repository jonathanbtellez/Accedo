import { validations } from "./validations.js";
const showError = (message, form) => {
    form.classList.remove("invisible");
    const ul = document.createElement("ul");
    const template = `<li class="text-warning text-center"><i class="bi bi-exclamation-diamond"></i> ${message}</li>`
    ul.innerHTML += template
    form.appendChild(ul);
}



const btnLogin = document.querySelector("#btn-logIn");
btnLogin.addEventListener("click", (e) =>{
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
    
    console.log(email, password);
});