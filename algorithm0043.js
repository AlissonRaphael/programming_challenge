/**
 * Even Between five Numbers
 * 
 * Make a program that reads five integer values. Count how many of these values ​​are even and  print this information like the following example.
 * 
 * Input
 * The input will be 5 integer values.
 * 
 * Output
 * Print a message like the following example with all letters in lowercase, indicating how many even numbers were typed.
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var numbers = []
var pairs = Number()


interface.question(': ', num1 => {
  numbers.push(Number(num1))
  interface.question(': ', num2 => {
    numbers.push(Number(num2))
    interface.question(': ', num3 => {
      numbers.push(Number(num3))
      interface.question(': ', num4 => {
        numbers.push(Number(num4))
        interface.question(': ', num5 => {
          numbers.push(Number(num5))

          numbers.forEach(number => {
            if(number % 2 == 0){
              pairs += 1
            }
          })

          interface.write(`${pairs} pares.`)
          interface.close()
        })
      })
    })
  })
})
