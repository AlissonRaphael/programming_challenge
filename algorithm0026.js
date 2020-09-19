/**
 * Average 3
 * Read four numbers (N1, N2, N3, N4), which one with 1 digit after the decimal point, corresponding to 4 scores obtained by a student. Calculate the average with weights 2, 3, 4 e 1 respectively, for these 4 scores and print the message "Media: " (Average), followed by the calculated result. If the average was 7.0 or more, print the message "Aluno aprovado." (Approved Student). If the average was less than 5.0, print the message: "Aluno reprovado." (Reproved Student). If the average was between 5.0 and 6.9, including these, the program must print the message "Aluno em exame." (In exam student).
 * 
 * In case of exam, read one more score. Print the message "Nota do exame: " (Exam score) followed by the typed score. Recalculate the average (sum the exam score with the previous calculated average and divide by 2) and print the message “Aluno aprovado.” (Approved student) in case of average 5.0 or more) or "Aluno reprovado." (Reproved student) in case of average 4.9 or less. For these 2 cases (approved or reproved after the exam) print the message "Media final: " (Final average) followed by the final average for this student in the last line.
 * 
 * Input
 * The input contains four floating point numbers that represent the students' grades.
 * 
 * Output
 * Print all the answers with one digit after the decimal point.
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var a, b, c, d, average = Number()

interface.question('Insira a nota I: ', num1 => {
  a = Number(num1)
  interface.question('Insira a nota II: ', num2 => {
    b = Number(num2)
    interface.question('Insira a nota III: ', num3 => {
      c = Number(num3)
      interface.question('Insira a nota IV: ', num4 => {
        d = Number(num4)
        average = ((a*2)+(b*3)+(c*4)+(d*1))/10

        if(average >= 7) interface.write(`Média: ${average}\nAprovado.\nMédia Final: ${average}`)

        if(average >= 5 && average < 7){
          interface.question(`Média: ${average}\nRecuperação.\nInsira a nota V: `, num5 => {
            interface.write(`Média Final: ${(average + Number(num5))/2}\n`)
            interface.close()
          })
        }

        if(average < 5) interface.write(`Média: ${average}\nReprovado.\nMédia Final: ${average}`)
      })
    })
  })
})
