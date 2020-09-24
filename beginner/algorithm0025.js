/**
 * Snack
 * Using the following table, write a program that reads a code and the amount of an item. After, print the value to pay. This is a very simple program with the only intention of practice of selection commands.
 * Input
 * The input file contains two integer numbers X and Y. X is the product code and Y is the quantity of this item according to the above table.
 * 
 * Output
 * The output must be a message "Total: R$ " followed by the total value to be paid, with 2 digits after the decimal point.
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var code, quantity, total = Number()
var snacks = [
  { code: 1, name: 'Cachoro Quente', price: 4 },
  { code: 2, name: 'X-Salada', price: 4.5 },
  { code: 3, name: 'X-Bacon', price: 5 },
  { code: 4, name: 'Torrada Simples', price: 2 },
  { code: 5, name: 'Refrigerante', price: 1.5 },
]
console.table(snacks)

interface.question('Código: ', num => {
  code = Number(num)
  interface.question('Quantidade: ', quant => {
    quantity = Number(quant)

    snack = snacks.filter(snack => snack.code == code)
    total = snack[0].price * quantity

    interface.write(`Total: R$ ${total.toFixed(2)}`)
    interface.close()
  })
})
