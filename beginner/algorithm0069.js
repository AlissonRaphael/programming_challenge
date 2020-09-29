/**
 * Multiples of 13
 * Write a program that reads two integer numbers X and Y and calculate the sum of all number not divisible by 13 between them, including both.
 * 
 * Input
 * The input file contains 2 integer numbers X and Y without any order.
 * 
 * Output
 * Print the sum of all numbers between X and Y not divisible by 13, including them if it is the case.
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

async function init(){
  var num1 = await new Promise(resolve => {
    interface.question(`Insira o número I: `, input => resolve(Number(input)))
  })

  var num2 = await new Promise(resolve => {
    interface.question(`Insira o número II: `, input => resolve(Number(input)))
  })

  if(num1 > num2){
    var aux = num2
    num2 = num1
    num1 = aux
  }

  var sum = Number()
  for(var i = num1; i <= num2; i++){
    if(i%13 != 0) sum += i
  }

  interface.write(`${sum}`)
  interface.close()
}

init()