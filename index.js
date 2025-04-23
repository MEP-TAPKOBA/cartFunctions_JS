const products = require('./products.json')
let cart = require('./cart.json')
const utilts = require('./utilts')

console.log('Товары в магазине:')
products.forEach((element, index) => {
    console.log(`   Товар ${element.name} с порядковым номером ${index} и стоимостью ${element.price}$`)
})
console.log('Товары в корзине:')
cart.forEach((element, index) => {
    console.log(`   Товар ${element.name} с порядковым номером ${index} и стоимостью ${element.price}$ в количестве ${element.quantity} шт.`)
})
