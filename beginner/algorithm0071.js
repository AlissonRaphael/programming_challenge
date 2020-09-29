/**
 * Type of Fuel
 * A gas station wants to determine which of their products is the preference of their customers. Write a program to read the type of fuel supplied (coded as follows: 1. Alcohol 2. Gasoline 3. Diesel 4. End). If you enter an invalid code (outside the range of 1 to 4) a new code must be requested. The program will end when the inserted code is the number 4.
 * 
 * Input
 * The input contains only integer and positive values.
 * 
 * Output
 * It should be written the message: "MUITO OBRIGADO" and the amount of customers who fueled each fuel type, as an example.
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

async function init(){
  var fuelType = Number()
  var alcool = Number()
  var gasolina = Number()
  var diesel = Number()

  while(true){
    fuelType = await new Promise(resolve => {
      interface.question(
        `Tipo de combustivel ['1-Álcool','2-Gasolina','3-Diesel','4-Sair']: \n>>> `,
        input => resolve(Number(input))
      )
    })

    if(fuelType == 4) break
    if(fuelType < 1 || fuelType > 4) interface.write('Insira um tipo válido!\n')
    if(fuelType == 1) alcool += 1
    if(fuelType == 2) gasolina += 1
    if(fuelType == 3) diesel += 1
  }

  interface.write(`Alcool: ${alcool}\n`)
  interface.write(`Gasolina: ${gasolina}\n`)
  interface.write(`Diesel: ${diesel}\n`)
  interface.close()
}

init()