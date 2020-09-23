/**
 * Interval 2
 * Read an integer N. This N will be the number of integer numbers X that will be read.
 * 
 * Print how many these numbers X are in the interval [10,20] and how many values are out of this interval.
 * 
 * Input
 * The first line of input is an integer N (N < 10000), that indicates the total number of test cases.
 * Each case is an integer number X (-107 < X < 107).
 * 
 * Output
 * For each test case, print how many numbers are in and how many values are out of the interval.
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var test = Number()
var numIn = Number()
var numOut = Number()
async function init(){
  var quantity = await new Promise(resolve => {
    interface.question('Quantidade de números: ', input => resolve(input))
  })
  
  for(var i = 1; i <= quantity; i++){
    test = await new Promise(resolve => {
      interface.question(`Número ${i}: `, input => resolve(input))
    })

    if(test >= 10 && test <= 20) numIn += 1
    if(test < 10 || test > 20) numOut += 1
  }

  interface.write(`${numIn} dentro.\n`)
  interface.write(`${numOut} fora.`)
  interface.close()
}

init()