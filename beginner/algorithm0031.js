/**
 * Triangle Types
 * Read 3 double numbers (A, B and C) representing the sides of a triangle and arrange them in decreasing order, so that the side A is the biggest of the three sides. Next, determine the type of triangle that they can make, based on the following cases always writing an appropriate message:
 * if A ≥ B + C, write the message: NAO FORMA TRIANGULO
 * if A2 = B2 + C2, write the message: TRIANGULO RETANGULO
 * if A2 > B2 + C2, write the message: TRIANGULO OBTUSANGULO
 * if A2 < B2 + C2, write the message: TRIANGULO ACUTANGULO
 * if the three sides are the same size, write the message: TRIANGULO EQUILATERO
 * if only two sides are the same and the third one is different, write the message: TRIANGULO ISOSCELES
 * Input
 * The input contains three double numbers, A (0 < A) , B (0 < B) and C (0 < C).
 * 
 * Output
 * Print all the classifications of the triangle presented in the input.
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

      if((Math.abs(A+B) == C) || (Math.abs(A+C) == B) || (Math.abs(C+B) == A)) {
        interface.write('Não é um triângulo.')
      } else {
        if((A**2 == ((B**2)+(C**2))) || (B**2 == ((A**2)+(C**2))) || (C**2 == ((B**2)+(A**2)))){
          interface.write('Triângulo retângulo.\n')
        }

        if((A**2 > ((B**2)+(C**2))) || (B**2 > ((A**2)+(C**2))) || (C**2 > ((B**2)+(A**2)))){
          interface.write('Acutângulo.\n')
        }

        if((A**2 < ((B**2)+(C**2))) || (B**2 < ((A**2)+(C**2))) || (C**2 < ((B**2)+(A**2)))){
          interface.write('Obtusângulo.\n')
        }

        if(A==B || A==C){
          if(B==C) interface.write('Triângulo equilátero.')
          if(B!=C) interface.write('Triângulo isósceles.')
        }
      }

      interface.close()
    })
  })
})
