/**
 * Month
 * Read an integer number between 1 and 12, including. Corresponding to this number, you must print the month of the year, in english, with the first letter in uppercase.
 * 
 * Input
 * The input contains only an integer number.
 * 
 * Output
 * Print the name of the month according to the input number, with the first letter in uppercase.
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var mounths = [
  'January','February','March','April','May','June','July',
  'August','September','October','November','December'
]

interface.question('Número do mês: ', num => {
  interface.write(`${mounths[Number(number)-1]}`)
  interface.close()
})
