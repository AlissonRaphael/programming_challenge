/**
 * PUM
 * Escreva um programa que leia um valor inteiro N. Este N é a quantidade de linhas de saída que serão apresentadas na execução do programa.
 * 
 * Entrada
 * O arquivo de entrada contém um número inteiro positivo N.
 * 
 * Saída
 * Imprima a saída conforme o exemplo fornecido.
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

async function init(){
  var num = await new Promise(resolve => {
    interface.question(`Insira o número I: `, input => resolve(Number(input)))
  })

  var aux = 0
  for(var i = 1; i <= num; i++){
    interface.write(`${i+aux} ${i+aux+1} ${i+aux+2} PUM\n`)
    aux += 3
  }

  interface.close()
}

init()