/**
 * Weighted Averages
 * Read an integer N, which represents the number of following test cases. Each test case consists of three floating-point numbers, each one with one digit after the decimal point. Print the weighted average for each of these sets of three numbers, considering that the first number has weight 2, the second number has weight 3 and the third number has weight 5.
 * 
 * Input
 * The input file contains an integer number N in the first line. Each N following line is a test case with three float-point numbers, each one with one digit after the decimal point.
 * 
 * Output
 * For each test case, print the weighted average according with below example.
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

async function init(){
  var quantity = await new Promise(resolve => {
    interface.question('Quantas médias? ', input => resolve(Number(input)))
  })

  var tests = []
  var note = Number()
  var weigths = [2,3,5]
  for(var i = 0; i < quantity; i++){
    var notes = {}
    console.log(`Insira as notas do aluno ${i+1}`)
    for(var k = 0; k <= 2; k++){
      note = await new Promise(resolve => {
        interface.question(`Nota ${k+1}: `, input => resolve(Number(input).toFixed(1)))
      })
      notes[`Nota ${k+1}`] = Number(note)
    }
    notes['Média'] = ((notes[`Nota 1`]*weigths[0])+(notes[`Nota 2`]*weigths[1])+(notes[`Nota 3`]*weigths[2]))/10
    tests.push(notes)
  }

  console.table(tests)
  interface.close()
}

init()