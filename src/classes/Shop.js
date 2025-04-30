const products = require('../json/products.json')

class Shop {
    constructor(cart) {
        this.cart = cart
    }
   check() {
    console.log(`В магазине есть:`)
    products.forEach(unit => {
        console.log(`№${unit.id}: ${unit.name} стоимостью ${unit.price} за штуку.`)
    })
   } 
    find(id) {
        const unit = products.find(u => u.id == id)
        if (!unit) {
            console.log(`Товара с таким ID нет в магазине`)
            return false
        }
        return unit
    }   
}

module.exports = {Shop}