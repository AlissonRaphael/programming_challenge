/**
 * Multiplication Table
 * Read an integer N (2 < N < 1000). Print the multiplication table of N.
 * 1 x N = N      2 x N = 2N        ...       10 x N = 10N  
 * 
 * Input
 * The input is an integer N (1 < N < 1000).
 * 
 * Output
 * Print the multiplication table of N., like the following example.
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

interface.question('Insira um número: ', input => {
  var num  = Number(input)

  for(var i = 1; i <= 10; i++){
    console.log(`${i}x${num} = ${i*num}`)
  }

  interface.close()
})