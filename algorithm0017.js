/**
 * Distance
 * Two cars (X and Y) leave in the same direction. The car X leaves with a constant speed of 60 km/h and the car Y leaves with a constant speed of 90 km / h.
 * 
 * In one hour (60 minutes) the car Y can get a distance of 30 kilometers from the X car, in other words, it can get away one kilometer for each 2 minutes.
 * 
 * Read the distance (in km) and calculate how long it takes (in minutes) for the car Y to take this distance in relation to the other car.
 * 
 * Input
 * The input file contains 1 integer value.
 * 
 * Output
 * Print the necessary time followed by the message "minutos" that means minutes in Portuguese.
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var speedX = 60
var speedY = 90
var time = Number()

interface.question('Distância inicial (km): ', distance => {
  time = (Number(distance)/(90-60))

  interface.write(`${time*60} minutos`)
  interface.close()
})
