/**
 * Remaining 2
 * Read an integer N. Print all numbers between 1 and 10000, which divided by N will give the rest = 2.
 * 
 * Input
 * The input is an integer N (N < 10000)
 * 
 * Output
 * Print all numbers between 1 and 10000, which divided by n will give the rest = 2, one per line.
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

interface.question(`Insira um número: `, num => {
  var number = Number(num)

  for(var i = 1; i <= 10000; i++){
    if(i%number == 2) console.log(i)
  }

  interface.close()
})
