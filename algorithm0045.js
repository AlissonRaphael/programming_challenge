/**
 * Odd Numbers
 * Read an integer value X (1 <= X <= 1000).  Then print the odd numbers from 1 to X, each one in a line, including X if is the case.
 * 
 * Input
 * The input will be an integer value.
 * 
 * Output
 * Print all odd values between 1 and X, including X if is the case.
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var num = Number()
interface.question('Ínsira um número entre 1 á 1000: ', res => {
  num = Number(res)
  for(var i = 0; i <= num; i++){
    if(i % 2 != 0) console.log(`${i}`)
  }
  interface.close()
})
