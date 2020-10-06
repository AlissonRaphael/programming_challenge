/**
 * Array Fill III
 * Read a number X. Put this X at the first position of an array N [100]. In each subsequent position (1 up to 99) put half of the number inserted at the previous position, according to the example below. Print all the vector N.
 * 
 * Input
 * The input contains a double precision number with four decimal places.
 * 
 * Output
 * For each position of the array N print "N[i] = Y", where i is the array position and Y is the number stored in that position. Each number of N[...] must be printed with 4 digits after the decimal point.
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

async function init(){
  var num = await new Promise(resolve => {
    interface.question('Insira o número: ', input => resolve(Number(input)))
  })

  var arr = []
  for(var i = 0; i < 100; i++){
    arr.push(num)
    num = num/2
  }
  
  interface.write(`${arr.toString()}`)
  interface.close()
}

init()
