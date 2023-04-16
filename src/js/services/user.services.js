import User from "../models/user.class.js";
import { userRepository } from "../repository/user.repository.js"


/**
 * Method to generate an autoincrement Id 
 * @param {User} list List of users to check the last id 
 * @returns Last id saved + 1;
*/
const generateId = (list) => {
    list.sort((a, b) => a.id - b.id);
    return list[list.length - 1].id + 1;
}

/**
 * Verifying that email is the email is or not saved in the db
 * @param {User} list List of saved users
 * @param {String} email Email joined
 * @returns A boolean, if the email exist the return will be true, if not exist will be false; 
 */
const checkEmail = (list, email) => {
    return list.some((a) => a.email == email);
}
/**
 * Method to that use the user repository to get all users
 * @returns saved users
 */
const getUsers = async () => {
    return await userRepository.getUsers();
}

/**
 * Method to that use the user repository to get all users
 * @returns saved user
 */
const getUser = async () => {
    return await userRepository.getUser();
}


/**
 * Method to that use the user repository create an user but before 
 * this method implement the logic to guarantee the quality of the information  
 * @param {User } user
 * @returns 
 */
const createUser = async (user) => {
    const list = await getUsers();
    user.setId(generateId(list));
    const isEmailSingin = checkEmail(list, user.getEmail());
    if (!isEmailSingin) {
        return await userRepository.createUser(user.getId(), user.getEmail(), user.getName(), user.getPassword());
    } else {
        return null;
    }
}

export const userServices = {
    createUser
}