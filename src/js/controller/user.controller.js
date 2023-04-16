import { userServices } from "../services/user.services.js";


const createUser = async(user)=>{
    console.log("User in controller " +user.getName());
    await userServices.createUser(user);
}

export const userController = {
    createUser
}