/**
 * Simple Sort
 * Read three integers and sort them in ascending order. After, print these values in ascending order, a blank line and then the values in the sequence as they were readed.
 * 
 * Input
 * The input contains three integer numbers.
 * 
 * Output
 * Present the output as requested above.
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var A, B, C = Number()

interface.question('Insira o número I: ', num1 => {
  A = Number(num1)
  interface.question('Insira o número II: ', num2 => {
    B = Number(num2)
    interface.question('Insira o número III: ', num3 => {
      C = Number(num3)

      if(A>B && A>C){
        if(B>C){
          interface.write(`Números: ${A}, ${B}, ${C}.\nOrdenados: ${C}, ${B}, ${A}`)
        } else {
          interface.write(`Números: ${A}, ${B}, ${C}.\nOrdenados: ${B}, ${C}, ${A}`)
        }
      }

      if(B>A && B>C){
        if(A>C){
          interface.write(`Números: ${A}, ${B}, ${C}.\nOrdenados: ${C}, ${A}, ${B}`)
        } else {
          interface.write(`Números: ${A}, ${B}, ${C}.\nOrdenados: ${A}, ${C}, ${B}`)
        }
      }

      if(C>A && C>B){
        if(A>B){
          interface.write(`Números: ${A}, ${B}, ${C}.\nOrdenados: ${B}, ${A}, ${C}`)
        } else {
          interface.write(`Números: ${A}, ${B}, ${C}.\nOrdenados: ${A}, ${B}, ${C}`)
        }
      }

      interface.close()
    })
  })
})
