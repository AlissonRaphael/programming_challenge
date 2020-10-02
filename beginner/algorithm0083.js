/**
 * S Sequence II
 * Write an algorithm to calculate and write the value of S, S being given by:
 * S = 1 + 3/2 + 5/4 + 7/8 + ... + 39/?
 * 
 * Input
 * There is no input in this problem.
 * 
 * Output
 * The output contains a value corresponding to the value of S.
 * The value should be printed with two digits after the decimal point.
 */

var result = 0
var j = 1
for(var i = 1; i <= 39; i += 2){
  console.log(`${i}/${j}`)
  result += i/j
  j *= 2

}

console.log(result.toFixed(2))
