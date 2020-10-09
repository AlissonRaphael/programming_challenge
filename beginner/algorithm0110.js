/**
 * Square Matrix I
 * Write a program that read an integer number N (0 ≤ N ≤ 100) that correspond to the order of a Bidimentional array of integers, and build the Array according to the above example.
 * 
 * Input
 * The input consists of several integers numbers, one per line, corresponding to orders from arrays to be built. The end of input is indicated by zero (0).
 * 
 * Output
 * For each integer number of input, print the corresponding array according to the example. (the values ​​of the arrays must be formatted in a field of size 3 right justified and separated by a space. None space must be printed after the last character of each row of the array. A blank line must be printed after each array.
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

async function init(){
  while(true){
    var num = await new Promise(resolve => {
      interface.question(`: `, input => resolve(Number(input)))
    })
    if(num === 0) break

    var term = Number()
    var matrix = []
    for(var i = 1; i <= num; i++){
      var line = []
  
      for(var j = 1; j <= num; j++){
        term = i
        if(j < term) term = j
        if (num - i + 1 < term) term = num - i + 1;
        if (num - j + 1 < term) term = num - j + 1;
  
        line.push(term)
      }
      matrix.push(line)
    }
  
    console.table(matrix)
  }
  interface.close()
}

init()