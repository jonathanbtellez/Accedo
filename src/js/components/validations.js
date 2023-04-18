/**
 * Returns a different message depending on the result of the validation.
 * @param {String} name 
 * @returns 
 */
const validateName = (name) => {
    let message = ""
    const regex = new RegExp("^[a-zA-Z]+$");
    if(regex.test(name.trim())){
        message = "true";
    }else if(name.length == 0){
        message = "Name is empty please write your name";
    }else{
        message = "You only can write one name, number and special characters is not valid"
    }
    return message;
}

/**
 * Returns a different message depending on the result of the validation.
 * @param {String} email 
 * @returns 
 */
const validateEmail = (email) => {
    let message = ""
    const regex = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");
    if(regex.test(email.trim())){
        message = "true";
    }else if(email.length == 0){
        message = "Email is empty please write your email";
    }else{
        message = 'The email format is invalid, please insert a email format valid "Correo@correo.com"'
    }
    return message;
}

/**
 * Returns a different message depending on the result of the validation.
 * @param {String} password 
 * @returns 
 */
const validatePassword = (password) => {
    let message = ""
    const regex = new RegExp("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$");
    if(regex.test(password.trim())){
        message = "true";
    }else if(password.length == 0){
        message = "Password is empty please write your password";
    }else{
        message = 'Password must contain at least 8 characters, 1 letter lowercase, 1 letter uppercase and 1 number, can contain special characters'
    }
    return message;
}

/**
 * Returns a specific message to show information about the user validation.
 * @returns 
 */
const validateUser = () => {    
    return "The email is used for other person please try with other email.";
}

/**
 * Returns a specific message to show information about the session user validation.
 * @returns 
 */
const validateSesssionUser = () =>{
    return "Sometinhg went wrong, please verify your email and password or sing in.";
}

export const validations = {
    validateName,
    validateEmail,
    validatePassword, 
    validateUser,
    validateSesssionUser
}