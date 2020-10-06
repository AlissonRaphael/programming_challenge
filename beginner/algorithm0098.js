/**
 * Lowest Number and Position
 * Write a program that reads a number N. This N is the size of a array X[N]. Next, read each of the numbers of X, find the smallest element of this array and its position within the array, printing this information.
 * 
 * Input
 * The first line of input contains one integer N (1 < N <1000), indicating the number of elements that should be read to an array X[N] of integer numbers. The second row contains each of the N values, separated by a space.
 * 
 * Output
 * The first line displays the message “Menor valor:” followed by a space and the lowest number read in the input. The second line displays the message “Posicao:” followed by a space and the array position in which the lowest number is, remembering that the array starts at the zero position.
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

async function init(){
  var size = await new Promise(resolve => {
    interface.question('Tamanho do vetor: ', input => resolve(Number(input)))
  })
  
  var arr = []
  var value = Number()
  var index = Number()

  for(var i = 0; i < size; i++){
    var newNum = await new Promise(resolve => {
      interface.question('Valor: ', input => resolve(Number(input)))
    })

    if(i === 0){
      value = newNum
      index = i
    }

    if(newNum < value){
      value = newNum
      index = i
    }
  }
  
  interface.write(`Menor valor: ${value}\n`)
  interface.write(`Posição: ${index}\n`)
  interface.close()
}

init()