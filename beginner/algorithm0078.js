/**
 * Exceeding Z
 * Write a program that reads two integers: X and Z (Z must be read as many times as necessary, until a number greater than X is read). Count how many integers must be summed in sequence (starting at and including X) so that the sum exceeds Z the minimum possible and writes this number.
 * 
 * The input may have, for example, the numbers ​​21 21 15 30. In this case, the number 21 is assumed for X, The numbers 21 and 15 must be ignored because they are smaller or equal to X. The number 30 is within the specification (greater than X) and is valid. So, the final result must be 2 for this test case, because the sum (21 + 22) is bigger than 30.
 * 
 * Input
 * The input contains only integer values​​, one per line, which may be positive or negative. The first number is the value of X. The next line will contain Z. If Z does not meet the specification of the problem, it should be read again, as many times as necessary.
 * 
 * Output
 * Print a line with an integer number representing the among of integer numbers that must be summed.
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

async function init(){
  var numX = await new Promise(resolve => {
    interface.question('Valor de X: ', input => resolve(Number(input)))
  })

  while(true){
    var numZ = await new Promise(resolve => {
      interface.question('Valor de Z: ', input => resolve(Number(input)))
    })

    if(numZ <= numX) interface.write('Inválido, insira um valor maior que X.\n')
    if(numZ > numX) break
  }

  var sum = 0
  var counter = 0
  for(var i = numX; sum <= numZ; i++){
    sum += i
    counter += 1
  }

  interface.write(`${counter}`)
  interface.close()
}

init()