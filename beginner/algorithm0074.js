/**
 * Logical Sequence
 * Write a program that reads an integer N. N * 2 lines must be printed by this program according to the example below. For numbers with more than 6 digits, all digits must be printed (no cientific notation allowed).
 * 
 * Input
 * The input file contains an integer N (1 < N < 1000).
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

  for(var i = 1; i <= num*2; i++){
    
    for(var j = 1; j <= 2; j++){
      interface.write(`${i} `)
      if(j == 1) interface.write(`${i**2} ${i*(i**2)}\n`)
      if(j == 2) interface.write(`${(i**2)+1} ${(i*(i**2))+1}\n`)
    }

  }
  
  interface.close()
}

init()
