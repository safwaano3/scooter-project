const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  constructor(){ 
    this.stations = {
      dartfordStation: [],
      whitechapelStation: [],
      londonbridgeStation: [],
    }
    this.registeredUsers = {}
  }

  registerUser(username,password,age){
    const keys = Object.keys(this.registeredUsers); //you get an array of keys
    if(keys.includes(username) === false && age > 18){ // it is checking if the user is already registered and over 18
      const user = new User(username, password, age); // this is creating a new user because we are trying to add them to be a new user
      this.registeredUsers[username] = user; //username is the key, user is the newly created and we are adding the new user to the registered users
      console.log("user has been registered")
    } else {
      throw new Error ("already registered or too young to register")
    }
  }
  loginUser(username, password){
    const user = this.registeredUsers[username]; // this line of code is logging them in
    if(user){
      user.login(password);
      console.log("user has been logged in")
    } else {
      throw new Error("Username or password is incorrect")
    }
  }
  
}

module.exports = ScooterApp

const registeredUsers = {
  Mil: User {username: "Mil", password: "1234" ...},
  Mil: User {username: "Mil", password: "1234" ...},
  Mil: User {username: "Mil", password: "1234" ...},
}


console.log(keys);

