/**
 * Difference
 * Read four integer values named A, B, C and D. Calculate and print the difference of product A and B by the product of C and D (A * B - C * D).
 * 
 * Input
 * The input file contains 4 integer values.
 * 
 * Output
 * Print DIFERENCA (DIFFERENCE in Portuguese) with all the capital letters, according to the following example, with a blank space before and after the equal signal.
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var A, B, C, D, result = Number()

interface.question('Insira A: ', numA => {
  A = Number(numA)
  interface.question('Insira B: ', numB => {
    B = Number(numB)
    interface.question('Insira C: ', numC => {
      C = Number(numC)
      interface.question('Insira D: ', numD => {
        D = Number(numD)
        result = ((A*B) + (C*D))
        interface.write(`Product = ${result}`)
        interface.close()
      })
    })
  })
})
