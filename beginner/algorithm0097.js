/**
 * Array Fill IV
 * In this problem you need to read 15 numbers and must put them into two different arrays: par if the number is even or impar if this number is odd. But  the size of each of the two arrrays is only 5 positions. So every time you fill one of two arrays, you must print the entire array to be able to use it again for the next numbers that are read. At the end, all remaining numbers of each one of these two arrays must be printed beggining with the odd array. Each array can be filled how many times are necessary.
 * 
 * Input
 * The input contains 15 integer numbers.
 * 
 * Output
 * Print the output like the following example.
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

async function init(){
  var even = []
  var odd = []

  for(var i = 0; i < 15; i++){
    var num = await new Promise(resolve => {
      interface.question(`Insira o número ${i+1}: `, input => resolve(Number(input)))
    })

    if(num%2 === 0) even.push(num)
    if(num%2 != 0) odd.push(num)

    if(even.length == 5){
      interface.write(`Pares: ${even.toString()}\n`)
      even = []
    }

    if(odd.length == 5){
      interface.write(`Ímpares: ${odd.toString()}\n`)
      odd = []
    }
  }

  interface.write(`Pares: ${even.toString()}\n`)
  interface.write(`Ímpares: ${odd.toString()}\n`)
  interface.close()
}

init()