/**
 * Sum of Consecutive Odd Numbers I
 * Read two integer values X and Y. Print the sum of all odd values between them.
 * 
 * Input
 * The input file contain two integer values.
 * 
 * Output
 * The program must print an integer number. This number is the sum off all odd values between both input values that must fit in an integer number.
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var start = Number()
var end = Number()
var sum = Number()

interface.question('Ínsira um número: ', num1 => {
  start = Number(num1)
  interface.question('Ínsira um número: ', num2 => {
    end = Number(num2)

    if(start < end){
      for(var i = start+1; i < end; i++){
        if(i % 2 != 0) sum += i
      }
    } else {
      for(var i = start-1; i > end; i--){
        if(i % 2 != 0) sum += i
      }
    }

    interface.write(`${sum}`)
    interface.close()
  })
})
