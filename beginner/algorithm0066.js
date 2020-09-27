/**
 * Score Validation
 * Write a program that reads two scores of a student. Calculate and print the average of these scores. Your program must accept just valid scores [0..10]. Each score must be validated separately.
 * 
 * Input
 * The input file contains many floating-point numbers​​, positive or negative. The program execution will be finished after the input of two valid scores.
 * 
 * Output
 * When an invalid score is read, you should print the message "nota invalida".
 * After the input of two valid scores, the message "media = " must be printed followed by the average of the student. The average must be printed with 2 numbers after the decimal point.
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

async function init(){
  var note1 = Number()
  var note2 = Number()

  while(true){
    var note1 = await new Promise(resolve => {
      interface.question(`Nota I [0 à 10]: `, input => resolve(Number(input)))
    })

    if(note1 >= 0 && note1 <= 10) break
    if(note1 < 0 || note1 > 10) interface.write('Insira uma nota válida!\n')
  }

  while(true){
    var note2 = await new Promise(resolve => {
      interface.question(`Nota II [0 à 10]: `, input => resolve(Number(input)))
    })

    if(note2 >= 0 && note2 <= 10) break
    if(note2 < 0 || note2 > 10) interface.write('Insira uma nota válida!\n')
  }

  interface.write(`Média: ${((note1+note2)/2).toFixed(2)}`)
  interface.close()
}

init()