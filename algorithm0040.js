/**
 * Positive Numbers
 * Write a program that reads 6 numbers. These numbers will only be positive or negative (disregard null values). Print the total number of positive numbers.
 * 
 * Input
 * Six numbers, positive and/or negative.
 * 
 * Output
 * Print a message with the total number of positive numbers.
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var numbers = []
var positive = Number()

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
          interface.question(': ', num6 => {
            numbers.push(Number(num6))

            numbers.forEach(number => { if(number >= 0) positive += 1 })
            interface.write(`${positive} positivos.`)
            interface.close()
          })
        })
      })
    })
  })
})