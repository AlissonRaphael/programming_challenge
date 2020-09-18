/**
 * Extremely Basic
 * 
 * Read 2 variables, named A and B and make the sum of these two variables, assigning its result to the variable X. Print X as shown below. Print endline after the result otherwise you will get “Presentation Error”.
 * 
 * Input
 * The input file will contain 2 integer numbers.
 * 
 * Output
 * Print the letter X (uppercase) with a blank space before and after the equal signal followed by the value of X, according to the following example.
 * 
 * Obs.: don't forget the endline after all.
*/

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var num1, num2, sum = Number()

interface.question('Insira o número I: ', first => {
  num1 = Number(first)
  interface.question('Insira o número II: ', last => {
    num2 = Number(last)
    sum = num1 + num2
    interface.write(`x = ${sum}`)
  })
})
