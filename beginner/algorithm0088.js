/**
 * Perfect Number
 * In mathematics, a perfect number is an integer for which the sum of all its own positive divisors (excluding itself) is equal to the number itself. For example the number 6 is perfect, because 1+2+3 is equal to 6. Your task is to write a program that read integer numbers and print a message informing if these numbers are perfect or are not perfect.
 * 
 * Input
 * The input contains several test cases. The first contains the number of test cases N (1 ≤ N ≤ 100). Each one of the following N lines contains an integer X (1 ≤ X ≤ 108), that can be or not a perfect number.
 * 
 * Output
 * For each test case print the message “X eh perfeito” (X is perfect) or “X nao eh perfeito” (X isn't perfect) according with to above specification.
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

async function init(){
  var testsQuantity = await new Promise(resolve => {
    interface.question('Quantidade de testes: ', input => resolve(Number(input)))
  })

  for(var i = 1; i <= testsQuantity; i++){
    var num = await new Promise(resolve => {
      interface.question(`Teste ${i}: `, input => resolve(Number(input)))
    })

    var sum = 0
    for(var j = 0; j < num; j++){
      if(num%j === 0) sum += j
    }

    interface.write(`${num} ${sum === num ? `é` : `não é`} um número perfeito.\n`)

  }
  interface.close()
}

init()