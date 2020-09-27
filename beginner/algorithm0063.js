/**
 * Fixed Password
 * Write a program that keep reading a password until it is valid. For each wrong password read, write the message "Senha inválida". When the password is typed correctly print the message "Acesso Permitido" and finished the program. The correct password is the number 2002.
 * 
 * Input
 * The input file contains several tests cases. Each test case contains only an integer number.
 * 
 * Output
 * For each number read print a message corresponding to the description of the problem.
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

async function init(){
  while(true){
    var password = await new Promise(resolve => {
      interface.question(`Teste: `, input => resolve(String(input)))
    })

    if(password === '2002'){
      interface.write('Acesso permitido')
      break
    } else {
      interface.write('Acesso negado! Tente novamente.\n')
    }
  }

  interface.close()
}

init()