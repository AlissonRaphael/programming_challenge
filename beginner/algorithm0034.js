/**
 * Salary Increase
 * The company ABC decided to give a salary increase to its employees, according to the following table:
 * 
 * Salary	Readjustment Rate
 * 0 - 400.00 - 15%
 * 400.01 - 800.00 - 12%
 * 800.01 - 1200.00 - 10%
 * 1200.01 - 2000.00 - 7%
 * Above 2000.00 - 4%
 * 
 * Read the employee's salary, calculate and print the new employee's salary, as well the money earned and the increase percentual obtained by the employee, with corresponding messages in Portuguese, as the below example.
 * Input
 * The input contains only a floating-point number, with 2 digits after the decimal point.
 * 
 * Output
 * Print 3 messages followed by the corresponding numbers (see example) informing the new salary, the among of money earned and the percentual obtained by the employee. Note:
 * Novo salario:  means "New Salary"
 * Reajuste ganho: means "Money earned"
 * Em percentual: means "In percentage"
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

interface.question('Salário: ', response => {
  var salary = Number(response)
  var newSalary = Number()

  if(salary > 0 && salary <= 400) newSalary = salary + salary*0.15
  if(salary > 400 && salary <= 800) newSalary = salary + salary*0.12
  if(salary > 800 && salary <= 1200) newSalary = salary + salary*0.10
  if(salary > 1200 && salary <= 2000) newSalary = salary + salary*0.7
  if(salary > 2000) newSalary += salary*0.4

  interface.write(`Novo salario: R$ ${newSalary.toFixed(2)}\n`)
  interface.write(`Reajuste ganho: R$ ${(newSalary-salary).toFixed(2)}\n`)
  interface.write(`Em percentual: ${Math.trunc(((newSalary-salary)/salary)*100)}%`)
  interface.close()
})
