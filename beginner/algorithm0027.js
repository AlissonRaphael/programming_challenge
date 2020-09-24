/**
 * Coordinates of a Point
 * Write an algorithm that reads two floating values (x and y), which should represent the coordinates of a point in a plane. Next, determine which quadrant the point belongs, or if you are over one of the Cartesian axes or the origin (x = y = 0).
 * 
 * If the point is at the origin, write the message "Origem".
 * 
 * If the point is over X axis write "Eixo X", else if the point is over Y axis write "Eixo Y".
 * 
 * Input
 * The input contains the coordinates of a point.
 * 
 * Output
 * The output should display the quadrant in which the point is.
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var x, y = Number()

interface.question('Insira a coordenada x: ', num1 => {
  x = Number(num1)
  interface.question('Insira a coordenada y: ', num2 => {
    y = Number(num2)

    if(x>0 && y>0) interface.write('Quadrante 1')
    if(x<0 && y>0) interface.write('Quadrante 2')
    if(x<0 && y<0) interface.write('Quadrante 3')
    if(x>0 && y<0) interface.write('Quadrante 4')
    if(x==0 && y==0) interface.write('Exatamente na origem')

    interface.close()
  })
})
