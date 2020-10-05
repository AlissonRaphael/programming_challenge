/**
 * Array Fill II
 * Write a program that reads a number T and fill a vector N[1000] with the numbers from 0 to T-1 repeated times, like as the example below.
 * 
 * Input
 * The input contains an integer number T (2 ≤ T ≤ 50).
 * 
 * Output
 * For each position of the array N, print "N[i] = x", where i is the array position and x is the number stored in that position.
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

async function init(){
  var num = await new Promise(resolve => {
    interface.question('Valor de T (2 ≤ T ≤ 50): ', input => resolve(Number(input)))
  })
  
  var arr = []
  for(var i = 0; i < 1000; i++){

    for(var j = 0; j < num; j++){
      if(arr.length <= 1000) arr.push(j)
      if(arr.length === 1000) break
    }

    if(arr.length === 1000) break

  }
  
  arr.forEach((num, index) => interface.write(`N(${index}) = ${num}\n`))
  interface.close()
}

init()