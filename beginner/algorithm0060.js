/**
 * Sum of Consecutive Odd Numbers II
 * Read an integer N that is the number of test cases. Each test case is a line containing two integer numbers X and Y. Print the sum of all odd values between them, not including X and Y.
 * 
 * Input
 * The first line of input is an integer N that is the number of test cases that follow. Each test case is a line containing two integer X and Y.
 * 
 * Output
 * Print the sum of all odd numbers between X and Y.
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

async function init(){
  var testsQuantity = await new Promise(resolve => {
    interface.question('Quantos testes? ', input => resolve(Number(input)))
  })
  
  console.log('Insira no formato [NúmeroI<espaço>NúmeroII]')

  var test = []
  for(var i = 1; i <= testsQuantity; i++){
    test = await new Promise(resolve => {
      interface.question(`Teste ${i}: `, input => resolve(input.split(' ')))
    })
    test = test.map(num => Number(num))

    if(test[0]%2 !== 0 && test[1]%2 !== 0) console.log(`${test[0]+test[1]}`)
  }

  interface.close()
}

init()