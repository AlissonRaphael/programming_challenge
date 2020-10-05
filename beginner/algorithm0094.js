/**
 * Fibonacci Array
 * Write a program that reads a number and print the Fibonacci number corresponding to this read number. Remember that the first elements of the Fibonacci series are 0 and 1 and each next term is the sum of the two preceding it. All the Fibonacci numbers calculated in this program must fit in a unsigned 64 bits number.
 * 
 * Input
 * The first line of the input contains a single integer T, indicating the number of test cases. Each test case contains a single integer N (0 ≤ N ≤ 60), corresponding to the N-th term of the Fibonacci series.
 * 
 * Output
 * For each test case in the input, print the message "Fib(N) = X", where X is the N-th term of the Fibonacci series.
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

async function init(){
  var testQuantity = await new Promise(resolve => {
    interface.question('Insira a quantidade de testes: ', input => resolve(Number(input)))
  })
  
  for(var j = 0; j < testQuantity; j++){
    var term = await new Promise(resolve => {
      interface.question('Insira o termo: ', input => resolve(Number(input)))
    })

    var sequence = []
    for(var i = 0; i <= term; i++){
      if(i === 0 || i === 1) sequence.push(i)
      if(i > 1) sequence.push(sequence[sequence.length-2]+sequence[sequence.length-1])
    }
    interface.write(`Fib(${term}) = ${sequence[term]}\n`)
  }
  interface.close()
}

init()