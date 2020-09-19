/**
 * Bhaskara's Formula
 * Read 3 floating-point numbers. After, print the roots of bhaskara’s formula. If it's impossible to calculate the roots because a division by zero or a square root of a negative number, presents the message “Impossivel calcular”.
 *
 * Input
 * Read 3 floating-point numbers (double) A, B and C.
 * 
 * Output
 * Print the result with 5 digits after the decimal point or the message if it is impossible to calculate.
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var A, B, C = Number()

interface.question('Insira a: ', num1 => {
  A = Number(num1)
  interface.question('Insira b: ', num2 => {
    B = Number(num2)
    interface.question('Insira c: ', num3 => {
      C = Number(num3)
      var delta = (B**2)-(4*A*C)
      console.log(delta)
      if(delta < 0) {
        interface.write('Impossível calcular')
        interface.close()
      }

      if(delta == 0){
        var r = -B/(2*A)
        interface.write(`Raiz: ${r.toFixed(5)}`)
        interface.close()
      }

      if(delta > 0){
        var r1 = (-B + Math.sqrt(delta))/(2*A)
        var r2 = (-B - Math.sqrt(delta))/(2*A)
        interface.write(`Raiz I: ${r1.toFixed(5)}\nRaiz II: ${r2.toFixed(5)}`)
        interface.close()
      }
    })
  })
})
