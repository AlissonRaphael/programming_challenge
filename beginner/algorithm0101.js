/**
 * Column in Array
 * Your job in this problem is to read a number that is a column of an array where an operation will be performed, an uppercase character, indicating the operation to be performed and all elements of a bidimentional array M[12][12]. Then, you have to calculate and print the sum or average of all elements within the green area according to the case. The following figure illustrates the case when is entered the number 5 to the array column, showing all elements that must be considered in the operation.
 * 
 * Fig.: https://resources.urionlinejudge.com.br/gallery/images/problems/UOJ_1182.png
 * 
 * Input
 * The first line of the input contains a simple integer C (0 ≤ C ≤ 11) indicating the column to be considered in the operation. The second line of the input contains a single uppercase character T ('S' or 'M'), indicating the operation Sum or Average (Média in portuguese) to be performed with the elements of the array. Follow 144 floating-point numbers of the array.
 * 
 * Output
 * Print the calculated result (sum or average), with one digit after the decimal point.
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

async function init(){
  var columnNumber = await new Promise(resolve => {
    interface.question(
      'Número da coluna da operação [0 à 11]: ',
      input => resolve(Number(input))
    )
  })

  var operation = await new Promise(resolve => {
    interface.question(
      'Operação a ser realizada [S-Soma, M-Média]: ',
      input => resolve(input.toUpperCase())
    )
  })

  var matrix = []
  for(var i = 0; i < 12; i++){
    var line = []

    for(var j = 0; j < 12; j++){
      line.push(await new Promise(resolve => {
        interface.question(
          `Valor da Linha[${i}] Coluna[${j}]: `,
          input => resolve(Number(input))
        )
      }))
    }

    matrix.push(line)
  }

  var sum = matrix.reduce((total, arr) => { return total += arr[columnNumber] }, 0)

  if(operation === 'S') interface.write(`Soma: ${sum}`)
  if(operation === 'M') interface.write(`Média: ${sum/12}`)
  interface.close()
}

init()