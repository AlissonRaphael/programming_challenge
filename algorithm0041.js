/**
 * Event Time
 * Peter is organizing an event in his University. The event will be in April month, beginning and finishing within April month. The problem is: Peter wants to calculate the event duration in seconds, knowing obviously the begin and the end time of the event.
 * You know that the event can take from few seconds to some days, so, you must help Peter to compute the total time corresponding to duration of the event.
 * 
 * Input
 * The first line of the input contains information about the beginning day of the event in the format: “Dia xx”. The next line contains the start time of the event in the format presented in the sample input. Follow 2 input lines with same format, corresponding to the end of the event.
 * 
 * Output
 * Your program must print the following output, one information by line, considering that if any information is null for example, the number 0 must be printed in place of W, X, Y or Z:
 * 
 * W dia(s)
 * X hora(s)
 * Y minuto(s)
 * Z segundo(s)
 * 
 * Obs: Consider that the event of the test case have the minimum duration of one minute. “dia” means day, “hora” means hour, “minuto” means minute and “Segundo” means second in Portuguese.
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var startDay, endDay = Number()
var startHour, endHour = String()

interface.question('Dia de início (dd): ', day1 => {
  startDay = Number(day1)
    interface.question('Hora do início (hh:mm:ss): ', hour1 => {
      startHour = String(hour1).split(':')
      interface.question('Último dia (dd): ', day2 => {
        endDay = Number(day2)
        interface.question('Hora do final (hh:mm:ss): ', hour2 => {
          endHour = String(hour2).split(':')

          var hours, minutes, seconds = Number()
          startHour = startHour.map(time => Number(time))
          endHour = endHour.map(time => Number(time))

          if(startHour[0] > endHour[0]){
            hours = 24-startHour[0]+endHour[0]
          } else if(startHour[0] < endHour[0]){
            hours = endHour[0]-startHour[0]
          }

          if(startHour[1] > endHour[1]){
            minutes = 60-startHour[1]+endHour[1]
          } else if(startHour[1] < endHour[1]){
            minutes = endHour[1]-startHour[1]
          }

          if(startHour[2] > endHour[2]){
            seconds = 60-startHour[2]+endHour[2]
          } else if(startHour[2] < endHour[2]){
            seconds = endHour[2]-startHour[2]
          }

          if(seconds >= 60){
            seconds = 60-seconds
            minutes += 1
          }
          if(minutes >= 60){
            minutes = 60-minutes
            hours += 1
          }

          var days = endDay-startDay-1
          if(hours >= 24){
            hours = 24-hours
            days += 1
          }

          interface.write(
            `Duração:\n${days} dia(s), ${hours} hora(s), ${minutes} minuto(s), ${seconds} segundo(s).`
          )
          interface.close()
        })
      })
    })
})
