/**
 * Summing Consecutive Integers
 * Write an algorithm to read a value A and a value N. Print the sum of N numbers from A (inclusive). While N is negative or ZERO, a new N (only N) must be read. All input values are in the same line.
 * 
 * Input
 * The input contains only integer values, ​​can be positive or negative.
 * 
 * Output
 * The output contains only an integer value.
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

async function init(){

  var numbers = await new Promise(resolve => {
    interface.question(`Insira o número: `, input => resolve(input.split(' ')))
  })
  numbers = numbers.map(num => Number(num))

  var numA = numbers[0]
  var numB = numbers[1]

  while(numB <= 0){
    numB = await new Promise(resolve => {
      interface.question(`Insira o número: `, input => resolve(Number(input)))
    })
  }

  var sum = 0
  for(var i = numA; i < (numA+numB); i++){
    sum += i
  }

  interface.write(sum)
  interface.close()
}

init()