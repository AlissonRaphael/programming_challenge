/**
 * Grenais
 * The Federação Gaúcha de Futebol invited you to write a program to present a statistical result of several GRENAIS. Write a program that read the number of goals scored by Inter and the number of goals scored by Gremio in a GRENAL. Write the message "Novo grenal (1-sim 2-nao)" and request a response. If the answer is 1, two new numbers must be read (another input case) asking the number of goals scored by the teams in a new departure, otherwise the program must be finished, printing:
 * 
 * - How many GRENAIS were part of the statistics.
 * - The number of victories of Inter.
 * - The number of victories of Gremio.
 * - The number of Draws.
 * - A message indicating the team that won the largest number of GRENAIS (or the message: "Não houve vencedor" if both team won the same quantity of GRENAIS).
 * 
 * Input
 * The input contains two integer values​​, corresponding to the goals scored by both teams. Then there is an integer (1 or 2), corresponding to the repetition of the algorithm.
 * 
 * Output
 * After each reading of the goals it must be printed the message "Novo grenal (1-sim 2-nao)". When the program is finished, the program must print the statistics as the example below.
 */


var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

async function init(){
  var gols = []
  var grenal = []

  while(true){
    gols = await new Promise(resolve => {
      interface.question(`Gremio _ _ Internacional\n       `, input => resolve(input.split(' ')))
    })
    gols = gols.map(gol => Number(gol))

    grenal.push({ gremio: gols[0], inter: gols[1] })

    var exit = await new Promise(resolve => {
      interface.question(`Adicionar mais jogos? (1-Sim | 2-Não): `, input => resolve(Number(input)))
    })

    if(exit == 2) break
  }

  var winsInter = Number()
  var winsGremio = Number()
  var draws = Number()

  grenal.map(grenal => {
    if(grenal.inter > grenal.gremio) winsInter += 1
    if(grenal.inter < grenal.gremio) winsGremio += 1
    if(grenal.inter == grenal.gremio) draws += 1
  })

  interface.write(`${grenal.length} grenais\n`)
  interface.write(`Inter venceu ${winsInter}\n`)
  interface.write(`Gremio venceu ${winsGremio}\n`)
  interface.write(`Empates: ${draws}\n`)
  if(winsInter < winsGremio) interface.write(`Gremio venceu mais`)
  if(winsInter > winsGremio) interface.write(`Inter venceu mais`)
  interface.close()
}

init()