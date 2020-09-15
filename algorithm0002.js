var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var num1 = Number()
var num2 = Number()
var sum = Number()

interface.question('Insira o número I: ', first => {
  num1 = Number(first)
  interface.question('Insira o número II: ', last => {
    num2 = Number(last)
    sum = num1 + num2
    interface.write(`x = ${sum}`)
  })
})
