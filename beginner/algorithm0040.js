/**
 * Positive Numbers
 * Write a program that reads 6 numbers. These numbers will only be positive or negative (disregard null values). Print the total number of positive numbers.
 * 
 * Input
 * Six numbers, positive and/or negative.
 * 
 * Output
 * Print a message with the total number of positive numbers.
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var number = Number()
var positive = Number()

async function init(){
  for(var i = 1; i <= 6; i++){
    number = Number(await new Promise(resolve => {
      interface.question(`Número ${i}: `, input => resolve(input))
    }))

    if(number > 0) positive += 1
  }

  interface.write(`${positive} positivos.`)
  interface.close()
}
init()
