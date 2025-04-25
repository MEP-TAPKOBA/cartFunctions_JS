const products = require('../json/products.json')
const productLogic = require('./productLogic')

function alarm(arr) {
    if (!Array.isArray(arr)) {
        console.log('Неправильный формат данных описания корзины')
        return false
    }
    return true
}
function addToCart(sellectCart, product) {
    if (!alarm(sellectCart)) return sellectCart
    const productUnit = productLogic.findProductUnit(product) // ищем свойства продукта в списке товаров по ID по ID
    if (!productUnit) return sellectCart
    let findUnit = productLogic.findProductInCart(sellectCart, product) //ищем в корзине есть данный продукт
    if (findUnit) { // Если он есть - добавляем одну штучку в корзину.
        findUnit.quantity = findUnit.quantity + 1
        console.log(`Товар ${findUnit.name} стоимостью в ${findUnit.price}$ добавлен в корзину. Их теперь ${findUnit.quantity} шт.`)
        return sellectCart
    }
    sellectCart.push(productUnit)
    findUnit = productLogic.findProductInCart(sellectCart, product)
    findUnit.quantity = 1
    console.log(`Новый товар ${findUnit.name} стоимостью в ${findUnit.price}$ добавлен в корзину. Их теперь ${findUnit.quantity} шт.`)
    return sellectCart
}
function removeFromCart(sellectCart, product) {
    if (!alarm(sellectCart)) return
    const productUnit = productLogic.findProductUnit(product) // ищем свойства продукта по ID
    if (!productUnit) return sellectCart
    let findUnit = productLogic.findProductInCart(sellectCart, product) //ищем в корзине есть данный продукт
    if (!findUnit) { // Если его нет - не можем удалить то чего нет
        console.log(`Товара ${productUnit.name} нет в корзине, что бы удалить`)
        return sellectCart
    }
    productLogic.deleteProduct(sellectCart,product)
    return sellectCart
}
function changeQuantity(sellectCart, product, newQuantity) {
    if (!alarm(sellectCart)) return
    const productUnit = productLogic.findProductUnit(product) // ищем свойства продукта по ID
    if (!productUnit) return sellectCart 
    let findUnit = productLogic.findProductInCart(sellectCart, product) //ищем в корзине есть данный продукт
    if (!findUnit) { // Если его нет - не можем поменять значение
        console.log(`Товара ${productUnit.name} нет в корзине, что бы изменить количество`)
        return sellectCart
    }
    if (newQuantity <= 0) {
        productLogic.deleteProduct(sellectCart,product)
        return sellectCart
    }
    findUnit.quantity = newQuantity
    console.log(`Теперь товара ${productUnit.name} в корзине ${findUnit.quantity} шт., общая стоимость товаров ${(findUnit.quantity * findUnit.price).toFixed(2)}$. `)
    return sellectCart
}
function calculateTotal(sellectCart) {
    if (!alarm(sellectCart)) return
    let totalpay = 0
    console.log(`В корзине лежит:`)
    sellectCart.forEach(element => {
        totalpay += element.price * element.quantity
        console.log(`   Товар ${element.name} стоимостью ${element.price}$ в количестве ${element.quantity} шт. Сумма: ${(element.price * element.quantity).toFixed(2)}$ `)
    })
    console.log(`Итоговая сумма: ${totalpay.toFixed(2)}$`)
    return sellectCart
}
function clearCart(sellectCart) {
    if (!alarm(sellectCart)) return
    sellectCart.splice(0, sellectCart.length)
    console.log(`Корзина пуста`)
    return sellectCart
}
module.exports = { addToCart, removeFromCart, changeQuantity, calculateTotal, clearCart, alarm } // экспортируем функции для использования в других файлах
