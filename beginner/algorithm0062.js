/**
 * Ascending and Descending
 * Read an undetermined number of pairs of integer values. Write a message for each pair indicating if this two numbers are in ascending or descending order.
 * 
 * Input
 * The input file contains several test cases. Each test case contains two integer numbers X and Y. The input will finished when X = Y.
 * 
 * Output
 * For each test case print “Crescente”, if the values X and Y are in ascending order, otherwise print “Decrescente”.
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

async function init(){
  while(true){
    test = await new Promise(resolve => {
      interface.question(`Teste: `, input => resolve(input.split(' ')))
    })

    test = test.map(num => Number(num))
    if(test[0] === test[1]) break

    if(test[0] < test[1]){
      interface.write('Ascendente\n')
    } else {
      interface.write('Descendente\n')
    }
  }

  interface.close()
}

init()