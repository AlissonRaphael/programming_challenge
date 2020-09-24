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
var animals = [
  { first: 'vertebrado', second: 'ave', last: 'carnivoro', name: 'Águia'},
  { first: 'vertebrado', second: 'ave', last: 'onivoro', name: 'Pomba'},
  { first: 'vertebrado', second: 'mamifero', last: 'onivoro', name: 'Homem'},
  { first: 'vertebrado', second: 'mamifero', last: 'herbivoro', name: 'Vaca'},
  { first: 'invertebrado', second: 'inseto', last: 'hematofago', name: 'Pulga'},
  { first: 'invertebrado', second: 'inseto', last: 'herbivoro', name: 'Lagarta'},
  { first: 'invertebrado', second: 'anelideo', last: 'hematofago', name: 'Sanguessuga'},
  { first: 'invertebrado', second: 'anelideo', last: 'onivoro', name: 'Minhoca'}
]

interface.question('Aspecto I: ', resp1 => {
  firstAspect = resp1
    interface.question('Aspecto II: ', resp2 => {
      secondAspect = resp2
      interface.question('Aspecto III: ', resp3 => {
        lastAspect = resp3

        var animal = animals.filter(animal => (
          firstAspect == animal.first && secondAspect == animal.second && lastAspect == animal.last
        ))
        interface.write(animal[0].name)
        interface.close()
      })
    })
})
