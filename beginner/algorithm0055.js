/**
 * Experiments
 * Maria has just started as graduate student in a medical school and she's needing your help to organize a laboratory experiment which she is responsible about. She wants to know, at the end of the year, how many animals were used in this laboratory and the percentage of each type of animal is used at all.
 * 
 * This laboratory uses in particular three types of animals: frogs, rats and rabbits. To obtain this information, it knows exactly the number of experiments that were performed, the type and quantity of each animal is used in each experiment.
 * 
 * Input
 * The first line of input contains an integer N indicating the number of test cases that follows. Each test case contains an integer Amount (1 ≤ Amount ≤ 15) which represents the amount of animal used and a character Type ('C', 'R' or 'S'), indicating the type of animal:
 * - C: Coelho (rabbit in portuguese)
 * - R: Rato (rat  in portuguese)
 * - S: Sapo (frog in portuguese)
 * 
 * Output
 * Print the total of animals used, the total of each type of animal and the percentual of each one in relation of the total of animals used. The percentual must be printed with 2 digits after the decimal point.
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

async function init(){
  var testQuantity = await new Promise(resolve => {
    interface.question('Insira a quantidade de testes: ', input => resolve(Number(input)))
  })

  var total = Number()
  var totalC = Number()
  var totalR = Number()
  var totalS = Number()

  console.log('Insira os testes no formato [Qtd.<espaço>Inicial].')
  for(var i = 0; i < testQuantity; i++){

    var input = await new Promise(resolve => {
      interface.question(`Teste ${i+1}: `, input => resolve(String(input).split(' ')))
    })

    if(input[1] == 'C') totalC += Number(input[0])
    if(input[1] == 'R') totalR += Number(input[0])
    if(input[1] == 'S') totalS += Number(input[0])

    total += Number(input[0])
  }

  interface.write(`Total: ${total} cobaias\n`)
  interface.write(`Total de coelhos: ${totalC}\n`)
  interface.write(`Total de ratos: ${totalR}\n`)
  interface.write(`Total de sapos: ${totalS}\n`)
  interface.write(`Percentual de coelhos: ${(totalC/total).toFixed(2)} %\n`)
  interface.write(`Percentual de ratos:  ${(totalR/total).toFixed(2)} %\n`)
  interface.write(`Percentual de sapos:  ${(totalS/total).toFixed(2)} %`)
  interface.close()
}

init()