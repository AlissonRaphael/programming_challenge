/**
 * Sequence IJ 3
 * Make a program that prints the sequence like the following exemple.
 * 
 * Input
 * This problem doesn't have input.
 * 
 * Output
 * Print the sequence like the example below.
 */

var j = 7
var k = 5
for(var i = 1; i <= 9; i++){
  var repeat = true
  while(repeat){
    console.log(`I = ${i}, J = ${j}`)
    if(j==k) repeat = false
    j -= 1
  }

  j += 5
  k += 2
}