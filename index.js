const products = require('./src/json/products.json')
let cart = require('./src/json/cart.json')
const { 
    addToCart, 
    changeQuantity, 
    removeFromCart, 
    calculateTotal, 
    clearCart
} = require('./src/utilts/utilts')

console.log('Товары в магазине:')
products.forEach((element, index) => {
    console.log(`   Товар ${element.name} с порядковым номером ${index} и стоимостью ${element.price}$`)
})
console.log('Товары в корзине:')
cart.forEach((element, index) => {
    console.log(`   Товар ${element.name} с порядковым номером ${index} и стоимостью ${element.price}$ в количестве ${element.quantity} шт.`)
})
