const { Shop } = require('./src/classes/Shop')
const { Cart } = require('./src/classes/Cart')
const { Validate } = require('./src/classes/Validate')

const cart = require('./src/json/cart.json')
const products = require('./src/json/products.json')

let validOk = new Validate
const validProducts = validOk.go(products)

let shop1 = new Shop(cart,validProducts)
let myCart = new Cart(shop1,cart)

myCart.show()

myCart.addTo(4)
myCart.addTo(5)
myCart.show()
myCart.changeQuantity(4,10)
myCart.show()
myCart.removeFrom(3)
myCart.show()
myCart.clear()
myCart.show()

console.log(myCart.cart)

