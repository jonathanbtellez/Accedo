export default class User {
    _id;
    _email;
    _name;
    _password;

    constructor(email,name,password){
        this._id = 1;
        this._email = email;
        this._name = name;
        this._password = password
    }
    getId(){
        return this._id;
    }
    getEmail(){
        return this._email;
    }
    getName(){
        return this._name;
    }
    getPassword(){
        return this._password;
    }
    setId(id){
        this._id = id;
    }
    setName(name){
        this._name = name;
    }
    setEmail(email){
        this._email = email;
    }
    setPassword(password){
        this._password = password;
    }

}