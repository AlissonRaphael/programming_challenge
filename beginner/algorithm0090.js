/**
 * Array Replacement I
 * Read an array X[10]. After, replace every null or negative number of X ​by 1. Print all numbers stored in the array X.
 * 
 * Input
 * The input contains 10 integer numbers. These numbers ​​can be positive or negative.
 * 
 * Output
 * For each position of the array, print "X [i] = x", where i is the position of the array and x is the number stored in that position.
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

async function init(){
  var array = []
  for(var i = 0; i < 10; i++){
    var num = await new Promise(resolve => {
      interface.question(`Número ${i+1}: `, input => resolve(Number(input)))
    })

    if(num <= 0) num = 1
    array.push(num)
  }

  array.map((num, index) => interface.write(`X[${index}] = ${num}\n`))
  interface.close()
}

init()