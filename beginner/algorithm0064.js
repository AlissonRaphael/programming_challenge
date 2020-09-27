/**
 * Quadrant
 * Write a program to read the coordinates (X, Y) of an indeterminate number of points in Cartesian system. For each point write the quadrant to which it belongs. The program finish when at least one of two coordinates is NULL (in this situation without writing any message).
 * 
 * Input
 * The input contains several tests cases. Each test case contains two integer numbers.
 * 
 * Output
 * For each test case, print the corresponding quadrant which these coordinates belong, as in the example.
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

async function init(){
  while(true){
    var coordinates = await new Promise(resolve => {
      interface.question(`Teste: `, input => resolve(input.split(' ')))
    })
    var x = Number(coordinates[0])
    var y = Number(coordinates[1])

    if(coordinates[0] == '' || coordinates[1] == '' || x==0 || y==0) break

    if(x>0 && y>0) interface.write('Primeiro\n')
    if(x<0 && y>0) interface.write('Segundo\n')
    if(x<0 && y<0) interface.write('Terceiro\n')
    if(x>0 && y<0) interface.write('Quarto\n')
  }

  interface.close()
}

init()