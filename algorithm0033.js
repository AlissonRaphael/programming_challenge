/**
 * Game Time with Minutes
 * Read the start time and end time of a game, in hours and minutes (initial hour, initial minute, final hour, final minute). Then print the duration of the game, knowing that the game can begin in a day and finish in another day,
 * 
 * Obs.: With a maximum game time of 24 hours and the minimum game time of 1 minute.
 * 
 * Input
 * Four integer numbers representing the start and end time of the game.
 * 
 * Output
 * Print the duration of the game in hours and minutes, in this format: “O JOGO DUROU XXX HORA(S) E YYY MINUTO(S)” . Which means: the game lasted XXX hour(s) and YYY minutes.
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var startHour, startMinutes, endHour, endMinutes = Number()

interface.question('Hora inicial: ', num1 => {
  startHour = Number(num1)
    interface.question('Minuto inicial: ', num2 => {
      startMinutes = Number(num2)
      interface.question('Hora final: ', num3 => {
        endHour = Number(num3)
        interface.question('Minuto final: ', num4 => {
          endMinutes = Number(num4)
          var hours, minutes = Number()

          if(startHour > endHour) hours = 24-startHour+endHour
          if(startHour < endHour) hours = endHour-startHour
          if(startMinutes > endMinutes) minutes = 60-startMinutes+endMinutes
          if(startMinutes < endMinutes) minutes = endMinutes-startMinutes

          if(minutes >= 60){
            minutes -= 60
            hours += 1
          }

          if(startHour == endHour && startMinutes == endMinutes){
            interface.write(`O jogo durou 24 hora(s) 0 minuto(s)`)
          }

          interface.write(`O jogo durou ${hours} hora(s) e ${minutes} minuto(s).`)
          interface.close()
        })
      })
    })
})
