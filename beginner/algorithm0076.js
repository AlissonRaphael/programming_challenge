/**
 * Growing Sequences
 * Your program must read an integer X indefinited times (the program must stop when X is equal to zero). For each X print the sequence from 1 to X, with one space between each one of these numbers.
 * 
 * PS: Be carefull. Don't leave any space after the last number of each line, otherwise you'll get Presentation Error.
 * 
 * Input
 * The input file contains many integer numbers. The last one is zero.
 * 
 * Output
 * For each number N of the input file, one output line must be printed, from 1 to N like the following example. Be careful with blank spaces after the last line number.
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

async function init(){
  var numbers = []
  while(true){
    var num = await new Promise(resolve => {
      interface.question(`Insira o número: `, input => resolve(Number(input)))
    })
    if(num == 0){
      break
    } else {
      numbers.push(num)
    }
  }


  for(var i = 0; i <= numbers.length; i += 1){
    for(var j = 1; j <= numbers[i]; j++){
      interface.write(`${j} `)
    }
    interface.write('\n')
  }
  interface.close()
}

init()