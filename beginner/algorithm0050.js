/**
 * Even or Odd
 * Read an integer value N. After, read these N values and print a message for each value saying if this value is odd, even, positive or negative. In case of zero (0), although the correct description would be "EVEN NULL", because by definition zero is even, your program must print only "NULL", without quotes.
 * 
 * Input
 * The first line of input is an integer N (N < 10000), that indicates the total number of test cases. Each case is a integer number X (-107 < X <107)..
 * 
 * Output
 * For each test case, print a corresponding message, according to the below example. All messages must be printed in uppercase letters and always will have one space between two words in the same line.
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

async function init(){
  var quantity = await new Promise(resolve => {
    interface.question('Quantos números: ', input => resolve(Number(input)))
  })

  var numbers = []
  for(var i = 1; i <= quantity; i++){
    numbers.push(await new Promise(resolve => {
      interface.question(`Número ${i}: `, input => resolve(Number(input)))
    }))
  }
  numbers.map(number => {
    if(number == 0) console.log('EVEN NULL')
    if(number > 0 && number%2 == 0) console.log('EVEN POSITIVE')
    if(number > 0 && number%2 != 0) console.log('ODD POSITIVE')
    if(number < 0 && number%2 == 0) console.log('EVEN NEGATIVE')
    if(number < 0 && number%2 != 0) console.log('ODD NEGATIVE')
  })
  interface.close()
}
init()
