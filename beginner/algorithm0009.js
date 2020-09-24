/**
 * Salary
 * Write a program that reads an employee's number, his/her worked hours number in a month and the amount he received per hour. Print the employee's number and salary that he/she will receive at end of the month, with two decimal places.
 * 
 * Don’t forget to print the line's end after the result, otherwise you will receive “Presentation Error”.
 * Don’t forget the space before and after the equal signal and after the U$.
 * Input
 * The input file contains 2 integer numbers and 1 value of floating point, representing the number, worked hours amount and the amount the employee receives per worked hour.
 * 
 * Output
 * Print the number and the employee's salary, according to the given example, with a blank space before and after the equal signal.
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var code, hour, amount, salary = Number()

interface.question('Código: ', codeNum => {
  code = Number(codeNum)
  interface.question('Horas trabalhadas: ', quantity => {
    hour = Number(quantity)
    interface.question('Valor da hora: ', hourValue => {
      amount = Number(hourValue)
      salary = (amount*hour)
      interface.write(
        `Código: ${code}\nHora Quantidade: ${hour}\nSalário: ${salary.toFixed(2)} R$`
      )
      interface.close()
    })
  })
})
