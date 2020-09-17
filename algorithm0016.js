/**
 * Distance Between Two Points
 * Read the four values corresponding to the x and y axes of two points in the plane, p1 (x1, y1) and p2 (x2, y2) and calculate the distance between them, showing four decimal places after the comma, according to the formula:
 * 
 * Input
 * The input file contains two lines of data. The first one contains two double values: x1 y1 and the second one also contains two double values with one digit after the decimal point: x2 y2.
 * 
 * Output
 * Calculate and print the distance value using the provided formula, with 4 digits after the decimal point.
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var x1 = Number()
var y1 = Number()
var x2 = Number()
var y2 = Number()
var distance = Number()

interface.question('Insira x1: ', num1 => {
  x1 = Number(num1)
  interface.question('Insira y1: ', num2 => {
    y1 = Number(num2)
    interface.question('Insira x2: ', num3 => {
      x2 = Number(num3)
      interface.question('Insira y2: ', num4 => {
        y2 = Number(num4)
        distance = Math.sqrt(((x2-x1)**2)+((y2-y1)**2))
        interface.write(`Distância entre os pontos: ${distance}`)
        interface.close()
      })
    })
  })
})
