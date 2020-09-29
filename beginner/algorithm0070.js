/**
 * Rest of a Division
 * Write a program that reads two integer numbers X and Y. Print all numbers between X and Y which dividing it by 5 the rest is equal to 2 or equal to 3.
 * 
 * Input
 * The input file contains 2 any positive integers, not necessarily in ascending order.
 * 
 * Output
 * Print all numbers according to above description, always in ascending order.
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

  if(num1 < num2){
    for(var i = num1; i <= num2; i++){
      if(i%5 == 2) interface.write(`${i}\n`)
      if(i%5 == 3) interface.write(`${i}\n`)
    }
  }
  if(num1 > num2){
    for(var i = num2; i <= num1; i++){
      if(i%5 == 2) interface.write(`${i}\n`)
      if(i%5 == 3) interface.write(`${i}\n`)
    }
  }

  interface.close()
}

init()
