/**
 * Even Between five Numbers
 * 
 * Make a program that reads five integer values. Count how many of these values ​​are even and  print this information like the following example.
 * 
 * Input
 * The input will be 5 integer values.
 * 
 * Output
 * Print a message like the following example with all letters in lowercase, indicating how many even numbers were typed.
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var number = Number()
var pairs = Number()

async function init(){
  for(var i = 1; i <= 5; i++){
    number = Number(await new Promise(resolve => {
      interface.question(`Número ${i}: `, input => resolve(input))
    }))
    if(number % 2 == 0) pairs += 1
  }
  
  interface.write(`${pairs} pares.`)
  interface.close()
}

init()
