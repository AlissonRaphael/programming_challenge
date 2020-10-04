/**
 * Prime Number
 * A Prime Number is a number that is divisible only by 1 (one) and by itself. For example the number 7 is Prime, because it can be divided only by 1 and by 7.
 * 
 * Input
 * The input contains several test cases. The first contains the number of test cases N (1 ≤ N ≤ 100). Each one of the following N lines contains an integer X (1 < X ≤ 107), that can be or not a prime number.
 * 
 * Output
 * For each test case print the message “X eh primo” (X is prime) or “X nao eh primo” (X isn't prime) according with to above specification.
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
    for(var j = 1; j <= num; j++){
      if(num%j === 0) sum += 1
    }

    interface.write(`${num} ${sum === 2 ? `é` : `não é`} um número primo.\n`)
  }
  interface.close()
}

init()