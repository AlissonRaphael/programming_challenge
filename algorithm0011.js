/**
 * Simple Calculate
 * In this problem, the task is to read a code of a product 1, the number of units of product 1, the price for one unit of product 1, the code of a product 2, the number of units of product 2 and the price for one unit of product 2. After this, calculate and show the amount to be paid.
 * 
 * Input
 * The input file contains two lines of data. In each line there will be 3 values: two integers and a floating value with 2 digits after the decimal point.
 * 
 * Output
 * The output file must be a message like the following example where "Valor a pagar" means Value to Pay. Remember the space after ":" and after "R$" symbol. The value must be presented with 2 digits after the point.
 * 
 */

var readline = require('readline')

var interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var cart = []

var totalPrice = Number()

function addProductInCart(){
  interface.question('Código do produto: ', num => {
    var product = {}
    product['code'] = Number(num)
    interface.question('Quantidade: ', quant => {
      product['quantity'] = Number(quant)
      interface.question('Preço unitário: ', uniPrice => {
        product['price'] = Number(uniPrice)
        product['total'] = (product.quantity * product.price)
        cart.push(new Object(product))
        interface.question('Adicionar produto? (S ou N): ', response => {
          if(response === 'S' || response === 's'){
            addProductInCart()
          } else {
            cart.map(product => {
              totalPrice += product.total
            })
            console.log(cart)
            console.log(`Valor total: R$ ${totalPrice.toFixed(2)}`)
          }
        })
      })
    })
  })
}

addProductInCart()
