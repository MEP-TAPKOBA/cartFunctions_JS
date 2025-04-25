const products = require('./src/json/products.json')
let cart = require('./src/json/cart.json')
const { 
    addToCart, 
    changeQuantity, 
    removeFromCart, 
    calculateTotal, 
    clearCart
} = require('./src/utilts/utilts')
const runAway = require('./src/utilts/runAway')

    runAway.autoCall(cart)
