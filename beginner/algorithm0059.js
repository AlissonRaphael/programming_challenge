/**
 * Sequence IJ 4
 * Make a program that prints the sequence like the following example.
 * 
 * Input
 * This problem doesn't have input.
 * 
 * Output
 * Print the sequence like the example below.
 */

for(var i = 0; i <= 2; i += 0.2){
  for(var j = 1; j <= 3; j++){
    console.log(`I = ${i.toFixed(1)}, J = ${(j+i).toFixed(1)}`)
  }
}
