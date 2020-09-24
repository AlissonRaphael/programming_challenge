/**
 * The Greatest
 * Make a program that reads 3 integer values and present the greatest one followed by the message "eh o maior". Use the following formula:
 * 
 * Input
 * The input file contains 3 integer values.
 * 
 * Output
 * Print the greatest of these three values followed by a space and the message “eh o maior”.
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var A, B, C, great = Number()

interface.question('Insira A: ', numA => {
  A = Number(numA)
  great = A
  interface.question('Insira B: ', numB => {
    B = Number(numB)
    if(B > great) great = B
    interface.question('Insira C: ', numC => {
      C = Number(numC)
      if(C > great) great = C
      interface.write(`O maior número é: ${great}`)
      interface.close()
    })
  })
})
