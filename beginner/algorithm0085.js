/**
 * Sum of Consecutive Odd Numbers III
 * Read an integer N that is the number of test cases that follows. Each test case contains two integers X and Y. Print one output line for each test case that is the sum of Y odd numbers from X including it if is the case. For example:
 * for the input 4 5, the output must be 45, that is: 5 + 7 + 9 + 11 + 13
 * for the input 7 4, the output must be 40, that is: 7 + 9 + 11 + 13
 * 
 * Input
 * The first line of the input is an integer N that is the number of test cases that follow. Each test case is a line containing two integer X and Y.
 * 
 * Output
 * Print the sum of all consecutive odd numbers from X.
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

async function init(){
  var numberOfTests = await new Promise(resolve => {
    interface.question('Número de testes: ', input => resolve(Number(input)))
  })

  var tests = []
  for(var i = 0; i < numberOfTests; i++){
    var test = await new Promise(resolve => {
      interface.question(`Teste ${i+1}: `, input => resolve(input.split(" ")))
    })
    test = test.map(num => Number(num))
    tests.push(test)
  }

  tests.map(test => {
    var sum = 0
    for(var i = test[0]; i < (test[0]+test[1]); i++){
      if(i%2 != 0) sum += i
    }
    interface.write(`${sum}\n`)
  })

  interface.close()
}

init()