/**
 * Easy Fibonacci
 * The following sequence of numbers 0 1 1 2 3 5 8 13 21 ... is known as the Fibonacci Sequence. Thereafter, each number after the first 2 is equal to the sum of the previous two numbers. Write an algorithm that reads an integer N (N < 46) and that print the first N numbers of this sequence.
 * 
 * Input
 * The input file contains an integer number N (0 < N < 46).
 * 
 * Output
 * The numbers ​​should be printed on the same line, separated by a blank space. There is no space after the last number.
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

async function init(){
  var sequenceQuantity = await new Promise(resolve => {
    interface.question('Insira a quantidade de números: ', input => resolve(Number(input)))
  })

  var sequence = []
  for(var i = 0; i < sequenceQuantity; i++){
    if(i === 0 || i === 1){
      sequence.push(i)
    } else {
      sequence.push(sequence[sequence.length-2]+sequence[sequence.length-1])
    }
  }

  interface.write(`${sequence.toString()}`)
  interface.close()
}

init()