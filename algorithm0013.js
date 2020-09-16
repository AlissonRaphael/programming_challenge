/**
 * Area
 * Make a program that reads three floating point values: A, B and C. Then, calculate and show:
 * a) the area of the rectangled triangle that has base A and height C.
 * b) the area of the radius's circle C. (pi = 3.14159)
 * c) the area of the trapezium which has A and B by base, and C by height.
 * d) the area of ​​the square that has side B.
 * e) the area of the rectangle that has sides A and B.
 * 
 * Input
 * The input file contains three double values with one digit after the decimal point.
 * 
 * Output
 * The output file must contain 5 lines of data. Each line corresponds to one of the areas described above, always with a corresponding message (in Portuguese) and one space between the two points and the value. The value calculated must be presented with 3 digits after the decimal point.
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var A = Number()
var B = Number()
var C = Number()
var triangle = Number()
var circle = Number()
var trapezium = Number()
var square = Number()
var rectangle = Number()

interface.question('Insira A: ', valueA => {
  A = Number(valueA)
  interface.question('Insira B: ', valueB => {
    B = Number(valueB)
    interface.question('Insira C: ', valueC => {
      C = Number(valueC)
      triangle = (A*C)/2 // a = b*h/2
      circle = 3.14159*(C**2) // a = pi*r²
      trapezium = ((A+B)*C)/2 // a = (B+b)*h/2
      square = B**2 // a = b²
      rectangle = A*B // a = b*h
      
      interface.write(`Área do triângulo: ${triangle} m²\n`)
      interface.write(`Área do círculo: ${circle} m²\n`)
      interface.write(`Área do trapézio: ${trapezium} m²\n`)
      interface.write(`Área do quadrado: ${triangle} m²\n`)
      interface.write(`Área do retângulo: ${triangle} m²\n`)
      interface.close()
    })
  })
})
