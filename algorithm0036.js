/**
 * DDD
 * Read an integer number that is the code number for phone dialing. Then, print the destination according to the following table:
 * 
 * If the input number isn’t found in the above table, the output must be:
 * DDD nao cadastrado
 * That means “DDD not found” in Portuguese language.
 * 
 * Input
 * The input consists in a unique integer number.
 * 
 * Output
 * Print the city name corresponding to the input DDD. Print DDD nao cadastrado if doesn't exist corresponding DDD to the typed number.
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

interface.question('Aspecto I: ', num => {
  var ddd = num.substring(0,2)
  var city = String()

  switch(ddd){
    case '61':
      city = 'Brasilia'
      break
    case '71':
      city = 'Salvador'
      break
    case '11':
      city = 'São Paulo'
      break
    case '21':
      city = 'Rio de Janeiro'
      break
    case '32':
      city = 'Juiz de Fora'
      break
    case '19':
      city = 'Campinas'
      break
    case '27':
      city = 'Vitoria'
      break
    case '31':
      city = 'Belo Horizonte'
      break
  }

  interface.write(city)
  interface.close()
})
