/**
 * Divisors I
 * Read an integer N and compute all its divisors.
 * 
 * Input
 * The input file contains an integer value.
 * 
 * Output
 * Write all positive divisors of N, one value per line.
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

async function init(){
  var num = await new Promise(resolve => {
    interface.question(': ', input => resolve(Number(input)))
  })

  for(var i = 0; i <= num; i++){
    if(num%i === 0) interface.write(`${i} `)
  }
  interface.close()
}

init()
