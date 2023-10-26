const User = require("./User");

class Scooter{
  static nextSerial = 1;
  constructor(station){
    this.station = station;
    this.user = null;
    this.charge = 100;
    this.isBroken = false
    this.serial = Scooter.nextSerial;
    Scooter.nextSerial++;
  }
  rent(user){
    if(user instanceof User){
      if(this.charge > 20 && this.isBroken === false){
        this.station = null  //null is to remove
        this.user = user // check out the scooter
      } else {
        throw new Error ("scooter needs to charge or scooter needs repair")
      }
    } 
  }
  dock(station){
    this.station = station
    this.user = null
  }
  
}

//rent(user)
// Accepts a user instance of the User class as an argument.

// *this.user has to be an instance of the User Class, the other class

//If the Scooter is charged above 20% and not broken, 
//remove it from its station, check it out to the user. 

// Otherwise, throw an error scooter needs to charge or scooter needs repair.
// dock(station)
// Return the scooter to the station. Be sure to clear out the user, so they don’t get charged unfairly!
module.exports = Scooter
console.log("Hi")