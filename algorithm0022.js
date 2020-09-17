/**
 * Selection Test 1
 * Read 4 integer values A, B, C and D. Then if B is greater than C and D is greater than A and if the sum of C and D is greater than the sum of A and B and if C and D were positives values and if A is even, write the message “Valores aceitos” (Accepted values). Otherwise, write the message “Valores nao aceitos” (Values not accepted).
 * 
 * Input
 * Four integer numbers A, B, C and D.
 * 
 * Output
 * Show the corresponding message after the validation of the values​​.
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var A = Number()
var B = Number()
var C = Number()
var D = Number()
var distance = Number()

interface.question('Insira A: ', num1 => {
  A = Number(num1)
  interface.question('Insira B: ', num2 => {
    B = Number(num2)
    interface.question('Insira C: ', num3 => {
      C = Number(num3)
      interface.question('Insira D: ', num4 => {
        D = Number(num4)

        if(B > C) {
          if(D > A){
            if((C+D) > (A+B)){
              if(C*D > 0){
                if((A % 2) == 0){
                  interface.write('Valores aceitos.')
                } else {
                  interface.write('Valores não aceitos.')
                }
              } else {
                interface.write('Valores não aceitos.')
              }
            } else {
              interface.write('Valores não aceitos.')
            }
          } else {
            interface.write('Valores não aceitos.')
          }
        } else {
          interface.write('Valores não aceitos.')
        }
        interface.close()
      })
    })
  })
})
