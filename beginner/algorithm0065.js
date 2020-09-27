/**
 * Dividing X by Y
 * Write a program that read two numbers X and Y and print the result of dividing the X by Y. If it's not possible, print the message "divisao impossivel".
 * 
 * Input
 * The input contains an integer number N. This N is the quantity of pairs of integer numbers X and Y read (dividend and divisor).
 * 
 * Output
 * For each test case print the result of this division with one digit after the decimal point, or “divisao impossivel” if it isn't possible to perform the calculation.
 * 
 * Obs.: Be carefull. The division between two integers in some languages generates another integer. Use cast:)
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

async function init(){
  var quantity = await new Promise(resolve => {
    interface.question(`Quantidade de testes: `, input => resolve(input.split(' ')))
  })

  for(var i = 1; i <= quantity; i++){
    var numbers = await new Promise(resolve => {
      interface.question(`Teste ${i}: `, input => resolve(input.split(' ')))
    })
    var x = Number(numbers[0])
    var y = Number(numbers[1])

    if(x==0) i += quantity

    if(y==0) interface.write(`0.0`)
    if(y>0) interface.write(`${(x/y).toFixed(1)}`)
    if(y<0) interface.write('Divisão impossivel')

  }

  interface.close()
}

init()