/**
 * Several Scores with Validation
 * Write an program to read two scores of a student. Calculate and print the semester average. The program must accept only valid scores (a score must fit in the range [0.10]). Each score must be validated separately.
 * 
 * The program must print a message "novo calculo (1-sim 2-nao)" that means "new calculate (1-yes 2-no)". After, the input will be (1 or 2). 1 means a new calculation, 2 means that the execution must be finished.
 * 
 * Input
 * The input file contains several positive or negative floating-point (double) values​. After the input of 2 valid scores, an integer number X will be read. Your program must stop when X = 2.
 * 
 * Output
 * If an invalid score is read, must be printed the message "nota invalida". When two valid scores are read, the message "media = " must be printed folowed by the average between these 2 scores. The message "novo calculo (1-sim 2-nao)" must be printed after reading X. This message should be displayed again if the standard input number for X is less than 1 or greater than 2, as example below.
 * 
 * The output average must be printed with 2 digits after the decimal point.
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
  
    interface.write(`Média: ${((note1+note2)/2).toFixed(2)}\n`)
    
    var exit = await new Promise(resolve => {
      interface.question(`Deseja continuar (1-Sim | 2-Não): `, input => resolve(Number(input)))
    })
    
    if(exit == 2) break
  }
  interface.close()
}

init()