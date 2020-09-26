/**
 * Sequence IJ 1
 * Make a program that prints the sequence like the following example.
 * 
 * Input
 * This problem doesn't have input.
 * 
 * Output
 * Print the sequence like the example below.
 */

var i = 1
var j = 60
var ctrl = true

while(ctrl){
  console.log(`I = ${i}, J = ${j}`)
  i += 3
  j -= 5

  if(j == 0) ctrl = false
}
