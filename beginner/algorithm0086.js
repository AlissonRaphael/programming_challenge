/**
 * Sum of Consecutive Even Numbers
 * The program must read an integer X indefinite times (stop when X=0). For each X, print the sum of five consecutive even numbers from X, including it if X is even. If the input number is 4, for example, the output must be 40, that is the result of the operation: 4+6+8+10+12. If the input number is 11, for example, the output must be 80, that is the result of 12+14+16+18+20.
 * 
 * Input
 * The input file contains many integer numbers. The last one is zero.
 * 
 * Output
 * Print the output according to the example below.
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

async function init(){
  while(true){
    var num = await new Promise(resolve => {
      interface.question(`Número: `, input => resolve(Number(input)))
    })

    if(num === 0) break

    var sum = 0
    var counter = 0
    while(counter < 5){
      if(num%2 === 0){
        sum += num
        counter += 1
      }
      num +=1
    }
    interface.write(`${sum}\n`)
  }

  interface.close()
}

init()