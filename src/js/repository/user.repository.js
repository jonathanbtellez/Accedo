const URL = "http://localhost:3000/users/";


/**
 * Method to get all users
 * @returns Lists of users
 */
const getUsers = async ()=> {
    const response = await fetch(URL);
    const jsonData = await response.json();
    return jsonData;
}

/**
 * Method to get an user
 * @param {Number} id 
 * @returns 
 */
const getUser = async (id)=> {
    const response = await fetch(URL+id);
    const jsonData = await response.json();
    return jsonData;
}

/**
 * Method that send a post request with the info that the new user
 * @param {Number} id 
 * @param {String} email 
 * @param {String} name 
 * @param {String} password 
 * @returns POST Request
 */
const createUser = async (id, email, name, password) =>{
    return fetch(URL,{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({id, email, name, password})
      });
}

export const userRepository = {
  getUsers,
  getUser,
  createUser
}
// createUser(2,"djuanca@gmail.com","david","123456");