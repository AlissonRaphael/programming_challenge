/**
 * Animal
 * Timelimit: 1
 * In this problem, your job is to read three Portuguese words. These words define an animal according to the table below, from left to right. After, print the chosen animal defined by these three words.
 * 
 * ((photo schema))
 * 
 * Input
 * The input contains 3 words, one by line, that will be used to identify the animal, according to the above table, with all letters in lowercase.
 * 
 * Output
 * Print the animal name according to the given input.
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var firstAspect, secondAspect, lastAspect = String()

interface.question('Aspecto I: ', resp1 => {
  firstAspect = resp1
    interface.question('Aspecto II: ', resp2 => {
      secondAspect = resp2
      interface.question('Aspecto III: ', resp3 => {
        lastAspect = resp3

        switch(firstAspect){
          case 'vertebrado':
            switch(secondAspect){
              case 'ave':
                switch(lastAspect){
                  case 'carnivoro':
                    interface.write('Águia')
                    break
                  case 'onivoro':
                    interface.write('Pomba')
                    break
                }
              case 'mamifero':
                switch(lastAspect){
                  case 'onivoro':
                    interface.write('Homem')
                    break
                  case 'herbivoro':
                    interface.write('Vaca')
                    break
                }
            }
          case 'invertebrado':
            switch(secondAspect){
              case 'inseto':
                switch(lastAspect){
                  case 'hematofago':
                    interface.write('Pulga')
                    break
                  case 'herbivoro':
                    interface.write('Lagarta')
                    break
                }
              case 'anelideo':
                switch(lastAspect){
                  case 'hematofago':
                    interface.write('Sanguessuga')
                    break
                  case 'onivoro':
                    interface.write('Minhoca')
                    break
                }
            }
        }

        interface.close()
      })
    })
})
