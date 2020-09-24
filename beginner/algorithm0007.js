/**
 * Average 2
 * Read three values (variables A, B and C), which are the three student's grades. Then, calculate the average, considering that grade A has weight 2, grade B has weight 3 and the grade C has weight 5. Consider that each grade can go from 0 to 10.0, always with one decimal place.
 * 
 * Input
 * The input file contains 3 values of floating points with one digit after the decimal point.
 * 
 * Output
 * Print the message "MEDIA"(average in Portuguese) and the student's average according to the following example, with a blank space before and after the equal signal.
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var A, B, C, average = Number()

interface.question('Nota A: ', noteA => {
  A = Number(noteA)
  interface.question('Nota B: ', noteB => {
    B = Number(noteB)
    interface.question('Nota C: ', notaC => {
      C = Number(notaC)
      average = ((A*2) + (B*3) + (C*5))/10
      interface.write(`Average = ${average.toFixed(2)}`)
      interface.close()
    })
  })
})
