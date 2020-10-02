/**
 * Ages
 * Write an algorithm to read an undeterminated number of data, each containing an individual's age. The final data, which will not enter in the calculations, contains the value of a negative age. Calculate and print the average age of this group of individuals.
 * 
 * Input
 * The input contains an undetermined number of integers. The input will be stop when a negative value is read.
 * 
 * Output
 * The output contains a value corresponding to the average age of individuals.
 * 
 * The average should be printed with two digits after the decimal point.
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

async function init(){
  var ages = []
  while(true){
    var num = await new Promise(resolve => {
      interface.question(': ', input => resolve(Number(input)))
    })
    if(num <= 0) break
    if(num > 0) ages.push(num)
  }

  var sum = ages.reduce((sum, age) => { return sum += age }, 0)

  interface.write(`${(sum/ages.length).toFixed(0)}`)
  interface.close()
}

init()