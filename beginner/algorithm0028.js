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

      if(A>B && A>C && B>C) interface.write(`Números: ${A}, ${B}, ${C}.\nOrdenados: ${C}, ${B}, ${A}`)
      if(A>B && A>C && C>B) interface.write(`Números: ${A}, ${B}, ${C}.\nOrdenados: ${B}, ${C}, ${A}`)
      if(B>A && B>C && A>C) interface.write(`Números: ${A}, ${B}, ${C}.\nOrdenados: ${C}, ${A}, ${B}`)
      if(B>A && B>C && C>A) interface.write(`Números: ${A}, ${B}, ${C}.\nOrdenados: ${A}, ${C}, ${B}`)
      if(C>A && C>B && A>B) interface.write(`Números: ${A}, ${B}, ${C}.\nOrdenados: ${B}, ${A}, ${C}`)
      if(C>A && C>B && B>A) interface.write(`Números: ${A}, ${B}, ${C}.\nOrdenados: ${A}, ${B}, ${C}`)

      interface.close()
    })
  })
})
