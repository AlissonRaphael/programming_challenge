/**
 * Even Square
 * Read an integer N. Print the square of each one of the even values from 1 to N including N if it is the case.
 * 
 * Input
 * The input contains an integer N (5 < N < 2000).
 * 
 * Output
 * Print the square of each one of the even values from 1 to N, as the given example.
 * 
 * Be carefull! Some language automaticly print 1e+006 instead 1000000. Please configure your program to print the correct format setting the output precision.
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

interface.question('Ínsira um número: ', res => {
  num = Number(res)
  for(var i = 1; i <= num; i++){
    if((i**2) % 2 != 0) console.log(`${i**2}`)
  }
  interface.close()
})
