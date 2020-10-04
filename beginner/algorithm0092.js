/**
 * Array Selection I
 * In this problem, your task is to read an array A[100]. At the end, print all array positions that store a number less or equal to 10 and the number stored in that position.
 * 
 * Input
 * The input contains 100 numbers. Each number can be integer, floating-point number, positive or negative.
 * 
 * Output
 * For each number of the array that is equal to 10 or less, print "A [i] = x", where i is the position of the array and x is the number stored in the position, with one digit after the decimal point.
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

async function init(){
  var array = []
  for(var i = 0; i < 10; i++){
    array.push(await new Promise(resolve => {
      interface.question(`Número ${i+1}: `, input => resolve(Number(input)))
    }))
  }

  array.map((num, index) => {
    if(num <= 10) interface.write(`X[${index}] = ${num}\n`)
  })
  interface.close()
}

init()