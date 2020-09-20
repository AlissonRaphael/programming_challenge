/**
 * Multiples
 * Read two nteger values (A and B). After, the program should print the message "Sao Multiplos" (are multiples) or "Nao sao Multiplos" (aren’t multiples), corresponding to the read values.
 * 
 * Input
 * The input has two integer numbers.
 * 
 * Output
 * Print the relative message to the input as stated above.
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var A, B, C = Number()

interface.question('Tamanho da reta A: ', num1 => {
  A = Number(num1)
  interface.question('Tamanho da reta B: ', num2 => {
    B = Number(num2)

    if(A%B == 0 || B%A == 0){
      interface.write('São múltiplos')
      interface.close()
    } else {
      interface.write('Não são múltiplos')
      interface.close()
    }
  })
})
