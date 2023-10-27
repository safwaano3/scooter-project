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
  logoutUser(username){
    const user = this.registeredUsers[username];
    if(user){
      user.logout();
      console.log("user is logged out")
    } else {
      throw new Error("no such user is logged in")
    }
  }
  createScooter(station){
    const keys = Object.keys(this.stations); //you get an array of keys
    if(keys.includes(station) === true){ // it is checking if the station exists
      const scooter = new Scooter(station); // this is creating a new user because we are trying to add them to be a new user
      this.stations[station].push(scooter); //username is the key, user is the newly created and we are adding the new user to the registered users
      console.log("created new scooter")
    } else {
      throw new Error ("no such station")
    }
  }
  dockScooter(scooter, station){
    const keys = Object.keys(this.stations);
    if(keys.includes(station) === false){
      throw new Error("no such station")
    } else if (scooter.station !== null){
      throw new Error("scooter already at station")
    } else{
      scooter.dock(station)
      console.log("scooter is docked")
    }
  }
  rentScooter(scooter,user){
    if (scooter.user !== null){
      throw new Error("scooter already rented")
    } else{
      scooter.rent(user)
      console.log("scooter is rented")
    }
  }
  print(){
    console.log(this.registeredUsers)
    console.log(this.stations)
  }

}

module.exports = ScooterApp
