/**
 * Logical Sequence 2
 * Write an program that reads two numbers X and Y (X < Y). After this, show a sequence of 1 to y, passing to the next line to each X numbers.
 * 
 * Input
 * The input contains two integer numbers X (1 < X < 20) and Y (X < Y < 100000).
 * 
 * Output
 * Each sequence must be printed in one line, with a blank space between each number, like the following example.
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

async function init(){
  var numbers = await new Promise(resolve => {
    interface.question(`Insira o número: `, input => resolve(input.split(' ')))
  })
  numbers = numbers.map(num => Number(num))

  for(var i = 1; i <= numbers[1]; i += numbers[0]){
    for(var j = 0; j <= numbers[0]-1; j++){
      if(i+j > numbers[1]) break
      interface.write(`${i+j} `)
    }
    interface.write('\n')
  }
  interface.close()
}

init()
