/**
 * Highest and Position
 * Read 100 integer numbers. Print the highest read value and the input position.
 * 
 * Input
 * The input file contains 100 distinct positive integer numbers.
 * 
 * Output
 * Print the highest number read and the input position of this value, according to the given example.
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

async function init(){
  var number = Number()
  var great = Number()
  var position = Number()
  for(var i = 1; i <= 100; i++){
    number = await new Promise(resolve => {
      interface.question(`${i}º: `, input => resolve(Number(input)))
    })

    if(number > great){
      great = number
      position = i
    }
  }

  interface.write(`Lido ${position}º posição, o ${great} é o maior número.`)
  interface.close()
}

init()