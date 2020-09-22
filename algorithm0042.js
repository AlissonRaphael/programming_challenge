/**
 * Positives and Average
 * Read 6 values that can be floating point numbers. After, print how many of them were positive. In the next line, print the average of all positive values typed, with one digit after the decimal point.
 * 
 * Input
 * The input consist in 6 numbers that can be integer or floating point values. At least one number will be positive.
 * 
 * Output
 * The first output value is the amount of positive numbers. The next line should show the average of the positive values ​typed.
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var numbers = []
var positive = Number()
var sum = Number()
var average = Number()

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
            numbers.forEach(number => {
              if(number >= 0){
                positive += 1
                sum += number
              }
            })
            average = sum/positive
            interface.write(`${positive} positivos.\n`)
            interface.write(`Média: ${average}.`)
            interface.close()
          })
        })
      })
    })
  })
})
