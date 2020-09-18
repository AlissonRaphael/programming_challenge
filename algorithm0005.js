/**
 * Simple Product
 * Read two integer values. After this, calculate the product between them and store the result in a variable named PROD. Print the result like the example below. Do not forget to print the end of line after the result, otherwise you will receive “Presentation Error”.
 * 
 * Input
 * The input file contains 2 integer numbers.
 * 
 * Output
 * Print the message "PROD" and PROD according to the following example, with a blank space before and after the equal signal.
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var num1, num2, prod = Number()

interface.question('Insira o número I: ', first => {
  num1 = Number(first)
  interface.question('Insira o número II: ', last => {
    num2 = Number(last)
    prod = num1 * num2
    interface.write(`x = ${prod}`)
  })
})
