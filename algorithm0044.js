/**
 * Even, Odd, Positive and Negative
 * Make a program that reads five integer values. Count how many   of these values are even, odd, positive and negative. Print these information like following example.
 * 
 * Input
 * The input will be 5 integer values.
 * 
 * Output
 * Print a message like the following example with all letters in lowercase, indicating how many of these values ​​are even, odd, positive and negative.
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var number = Number()
var pairs = Number()
var odds = Number()
var positives = Number()
var negatives = Number()

async function init(){
  for(var i = 1; i <= 5; i++){
    number = Number(await new Promise(resolve => {
      interface.question(`Número ${i}: `, input => resolve(input))
    }))
    if(number % 2 == 0) pairs += 1
    if(number % 2 != 0) odds += 1
    if(number > 0) positives += 1
    if(number < 0) negatives += 1
  }
  
  interface.write(`${pairs} valor(es) par(es)\n`)
  interface.write(`${odds} valor(es) impar(es)\n`)
  interface.write(`${positives} valor(es) positivo(s)\n`)
  interface.write(`${negatives} valor(es) negativo(s)`)
  interface.close()
}

init()
