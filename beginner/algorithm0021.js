/**
 * Banknotes and Coins
 * Read a value of floating point with two decimal places. This represents a monetary value. After this, calculate the smallest possible number of notes and coins on which the value can be decomposed. The considered notes are of 100, 50, 20, 10, 5, 2. The possible coins are of 1, 0.50, 0.25, 0.10, 0.05 and 0.01. Print the message “NOTAS:” followed by the list of notes and the message “MOEDAS:” followed by the list of coins.
 * 
 * Input
 * The input file contains a value of floating point N (0 ≤ N ≤ 1000000.00).
 * 
 * Output
 * Print the minimum quantity of banknotes and coins necessary to change the initial value, as the given example.
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

interface.question('Valor: R$ ', response => {
  var value = Number(response)
  var banknotesQuantity = []

  function quantifier(note){
    if(value >= note){
      banknotesQuantity.push([note, parseInt(value/note)])
      value = value % note
    } else {
      banknotesQuantity.push([note, 0])
    }
  }

  [100, 50, 20, 10, 5, 2, 1, 0.5, 0.25, 0.10, 0.05].map(money => quantifier(money))

  banknotesQuantity.map((money, index) => {
    if(index === 0) console.log('Notas:')
    if(money[0] > 1) console.log(`${money[1]} nota(s) de R$ ${money[0].toFixed(2)}`)
    if(money[0] === 1) console.log(`Moedas:\n${money[1]} moeda(s) de R$ ${money[0].toFixed(2)}`)
    if(money[0] < 1) console.log(`${money[1]} moeda(s) de R$ ${money[0].toFixed(2)}`)
  })
  interface.close()
})
