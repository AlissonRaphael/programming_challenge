/**
 * Age in Days
 * Read an integer value corresponding to a person's age (in days) and print it in years, months and days, followed by its respective message “ano(s)”, “mes(es)”, “dia(s)”.
 * 
 * Note: only to facilitate the calculation, consider the whole year with 365 days and 30 days every month. In the cases of test there will never be a situation that allows 12 months and some days, like 360, 363 or 364. This is just an exercise for the purpose of testing simple mathematical reasoning.
 * 
 * Input
 * The input file contains 1 integer value.
 * 
 * Output
 * Print the output, like the following example.
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

interface.question('Quantidade de dias: ', daysQuantity => {
  var days = Number(daysQuantity)
  var final = []

  function quantifier(label, inDays){
    if(days >= inDays){
      final.push({key: label, quantity: parseInt(days/inDays)})
      days = days % inDays
    } else {
      final.push({key: label, quantity: 0})
    }
  }

  [{key:'Ano', inDays:365},{key:'Mês', inDays:30},{key:'Dia',inDays:1}]
    .map(label => quantifier(label.key, label.inDays))

  final.map(obj => {
    console.log(`${obj.quantity} ${obj.key}(s)`)
  })
  interface.close()
})
