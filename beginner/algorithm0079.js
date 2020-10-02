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

  var n2Enesima = 0
  var n1Enesima = 1
  var n = 0
  var counter = 0
  while(counter < sequenceQuantity){
    if(counter == 0) interface.write(`${counter}`)
    if(counter == 1) interface.write(`, ${counter}`)

    if(counter > 1){
      n = n2Enesima + n1Enesima
      interface.write(`, ${n}`)
      n2Enesima = n1Enesima
      n1Enesima = n
    }

    counter += 1
  }

  /**
   * Array Solution
   * var sequence = []
   * for(var i = 2; i < sequenceQuantity; i++){
   *   if(i === 0 || i === 1) sequence.push(i)
   *   if(i > 1) sequence.push(sequence[sequence.length-2]+sequence[sequence.length-1])
   * }
   * interface.write(`${sequence.toString()}`)
   */

   interface.close()
}

init()