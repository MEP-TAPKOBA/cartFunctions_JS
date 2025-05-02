class Shop {
    constructor(cart,products) {
        this.cart = cart
        this.products = products
    }
   check() {
    console.log(`В магазине есть:`)
    this.products.forEach(unit => {
        console.log(`№${unit.id}: ${unit.name} стоимостью ${unit.price} за штуку.`)
    })
   } 
    find(id) {
        const unit = this.products.find(u => u.id == id)
        if (!unit) {
            console.log(`Товара с таким ID нет в магазине`)
            return false
        }
        return unit
    }   
}

module.exports = {Shop}