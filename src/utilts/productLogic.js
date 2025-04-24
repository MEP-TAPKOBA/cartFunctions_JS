const products = require('../json/products.json')

function findProductUnit(findProductID) {
    let unit = products.find(prod => prod.id == findProductID)
    if (!unit) {
        console.log(`Продукт с таким ID не найден в списке товаров`)
        return unit
    }
    return unit
}
function findProductInCart(cart,findProductID){
    let unit = cart.find(prod => prod.id == findProductID)
    return unit
}
function deleteProduct(cart, product){
    let index = cart.findIndex(prod => prod.id === product)
    let unit = findProductUnit(product)
    if (index !== -1) {
        console.log(`Товар ${unit.name} полностью удален из корзины`)
        cart.splice(index, 1)
    }
    return
}
module.exports = { findProductUnit, findProductInCart, deleteProduct }