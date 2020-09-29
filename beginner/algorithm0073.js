/**
 * Squared and Cubic
 * Write a program that reads an integer N (1 < N < 1000). This N is the number of output lines printed by this program.
 * 
 * Input
 * The input file contains an integer N.
 * 
 * Output
 * Print the output according to the given example.
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

async function init(){
  var num = await new Promise(resolve => {
    interface.question(`Insira o número: `, input => resolve(Number(input)))
  })

  for(var i = 1; i <= num; i++){
    interface.write(`${i} ${i**2} ${i**3}\n`)
  }

  interface.close()
}

init()