/**
 * Above the Main Diagonal
 * Read an uppercase character that indicates an operation that will be performed in an array M[12][12]. Then, calculate and print the sum or average considering only that numbers that are above the main diagonal of the array, like shown in the following figure (green area).
 * 
 * Fig.: https://resources.urionlinejudge.com.br/gallery/images/problems/UOJ_1183.png
 * 
 * Input
 * The first line of the input contains a single uppercase character O ('S' or 'M'), indicating the operation Sum or Average (Média in portuguese) to be performed with the elements of the array. Follow 144 floating-point numbers of the array.
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
  var operation = await new Promise(resolve => {
    interface.question(
      'Operação a ser realizada [S-Soma, M-Média]: ',
      input => resolve(input.toUpperCase())
    )
  })

  var sum = 0
  var matrix = []
  for(var i = 0; i < 12; i++){
    var line = []

    for(var j = 0; j < 12; j++){
      var num = await new Promise(resolve => {
        interface.question(
          `Valor da Linha[${i}] Coluna[${j}]: `,
          input => resolve(Number(input))
        )
      })

      line.push(num)
      if(j > i) sum += num
    }

    matrix.push(line)
  }

  if(operation === 'S') interface.write(`Soma: ${sum}`)
  if(operation === 'M') interface.write(`Média: ${sum/72}`)
  interface.close()
}

init()