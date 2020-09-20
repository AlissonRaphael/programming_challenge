/**
 * Game Time
 * Read the start time and end time of a game, in hours. Then calculate the duration of the game, knowing that the game can begin in a day and finish in another day, with a maximum duration of 24 hours. The message must be printed in portuguese “O JOGO DUROU X HORA(S)” that means “THE GAME LASTED X HOUR(S)”
 * 
 * Input
 * Two integer numbers representing the start and end time of a game.
 * 
 * Output
 * Print the duration of the game as in the sample output.
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var startHour, endHour = Number()

interface.question('Hora inicial: ', num1 => {
  startHour = Number(num1)
    interface.question('Hora final: ', num2 => {
      endHour = Number(num2)

      if(startHour == endHour) interface.write(`O jogo durou 24 hora(s).`)
      if(startHour > endHour) interface.write(`O jogo durou ${24 - startHour + endHour} hora(s).`)
      if(startHour < endHour) interface.write(`O jogo durou ${endHour-startHour} hora(s).`)

      interface.close()
    })
})
