/**
 * Positives and Average
 * Read 6 values that can be floating point numbers. After, print how many of them were positive. In the next line, print the average of all positive values typed, with one digit after the decimal point.
 * 
 * Input
 * The input consist in 6 numbers that can be integer or floating point values. At least one number will be positive.
 * 
 * Output
 * The first output value is the amount of positive numbers. The next line should show the average of the positive values ​typed.
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var positive = Number()
var number = Number()
var sum = Number()
async function init(){
  for(var i = 1; i <= 6; i++){
    number = Number(await new Promise(resolve => {
      interface.question(`Número ${i}: `, input => resolve(input))
    }))

    if(number >= 0){
      positive += 1
      sum += number
    }
  }

  interface.write(`${positive} positivos.\nMédia: ${sum/positive}`)
  interface.close()
}

init()
