/**
 * Array change I
 * Write a program that reads an array N [20]. After, change the first element by the last, the second element by the last but one, etc.., Up to change the 10th to the 11th. print the modified array.
 * 
 * Input
 * The input contains 20 integer numbers, positive or negative.
 * 
 * Output
 * For each position of the array N print "N[i] = Y", where i is the array position and Y is the number stored in that position.
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

async function init(){
  var initialArray = []
  for(var i = 0; i <= 19; i++){
    initialArray.push(await new Promise(resolve => {
      interface.question(`Posição ${i}: `, input => resolve(Number(input)))
    }))
  }

  var finalArray = []
  for(var i = 0; i <= 19; i++){
    finalArray[i] = initialArray[19-i]
  }

  interface.write(`${initialArray}\n`)
  interface.write(`${finalArray}`)
  interface.close()
}

init()
