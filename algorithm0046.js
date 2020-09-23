/**
 * Six Odd Numbers
 * Read an integer value X and print the 6 consecutive odd numbers from X, a value per line, including X if it is the case.
 * 
 * Input
 * The input will be a positive integer value.
 * 
 * Output
 * The output will be a sequence of six odd numbers.
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

interface.question('Ínsira um número: ', res => {
  num = Number(res)
  for(var i = num; i <= (num+11); i++){
    if(i % 2 != 0) console.log(`${i}`)
  }
  interface.close()
})
