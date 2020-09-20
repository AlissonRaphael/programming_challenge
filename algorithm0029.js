/**
 * Triangle
 * Read three point floating values (A, B and C) and verify if is possible to make a triangle with them. If it is possible, calculate the perimeter of the triangle and print the message:
 * 
 * Perimetro = XX.X
 * 
 * If it is not possible, calculate the area of the trapezium which basis A and B and C as height, and print the message:
 * 
 * Area = XX.X
 * 
 * Input
 * The input file has tree floating point numbers.
 * 
 * Output
 * Print the result with one digit after the decimal point.
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
    interface.question('Tamanho da reta C: ', num3 => {
      C = Number(num3)

      if((Math.abs(A+B) == C) || (Math.abs(A+C) == B) || (Math.abs(C+B) == A)){
        interface.write(`Área do trapézio: ${((A+B)*C)/2}`)
        interface.close()
      } else {
        interface.write(`Perímetro do triângulo: ${A+B+C}`)
        interface.close()
      }
    })
  })
})
