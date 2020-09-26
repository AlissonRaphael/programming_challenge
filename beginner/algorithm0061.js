/**
 * Sequence of Numbers and Sum
 * Read an undetermined number of pairs values M and N (stop when any of these values is less or equal to zero). For each pair, print the sequence from the smallest to the biggest (including both) and the sum of consecutive integers between them (including both).
 * 
 * Input
 * The input file contains pairs of integer values M and N. The last line of the file contains a number zero or negative, or both.
 * 
 * Output
 * For each pair of numbers, print the sequence from the smallest to the biggest and the sum of these values, as shown below.
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

async function init(){
  var ctrl = true
  while(ctrl){
    test = await new Promise(resolve => {
      interface.question(`Teste: `, input => resolve(input.split(' ')))
    })

    test = test.map(num => Number(num))
    if(test[0] <= 0 || test[1] <= 0){
      ctrl = false
      break
    }

    var total = Number()
    if(test[0] < test[1]){
      for(var i = test[0]; i <= test[1]; i++){
        interface.write(`${i} `)
        total += i
      }
      interface.write(`sum = ${total}\n`)
    }

    if(test[0] > test[1]){
      for(var i = test[1]; i <= test[0]; i++){
        interface.write(`${i} `)
        total += i
      }
      interface.write(`, sum = ${total}\n`)
    }
  }
  interface.close()
}

init()