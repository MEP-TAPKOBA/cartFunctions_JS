const products = require('./products.json')

function alarm(arr) {
    if (!Array.isArray(arr)) {
        console.log('Неправильный формат данных описания корзины')
        return false
    }
    return true
}
function addToCart(sellectCart, product) {
    if (!alarm(sellectCart)) return
    let productUnit = products.find(unit => unit.id == product) // ищем свойства продукта по ID
    let findUnit = sellectCart.find(unit => unit.id == product) //ищем в корзине есть данный продукт
    if (findUnit) { // Если он есть - добавляем одну штучку в корзину.
        findUnit.quantity = findUnit.quantity + 1
        console.log(`Товар ${findUnit.name} стоимостью в ${findUnit.price}$ добавлен в корзину. Их теперь ${findUnit.quantity} шт.`)
        return sellectCart
    }
    sellectCart.push(productUnit)
    findUnit = sellectCart.find(unit => unit.id == product)
    findUnit.quantity = 1
    console.log(`Новый товар ${findUnit.name} стоимостью в ${findUnit.price}$ добавлен в корзину. Их теперь ${findUnit.quantity} шт.`)
    return sellectCart
}
function removeFromCart(sellectCart, product) {
    if (!alarm(sellectCart)) return
    const productUnit = products.find(unit => unit.id == product) // ищем свойства продукта по ID
    let findUnit = sellectCart.find(unit => unit.id == product) //ищем в корзине есть данный продукт
    if (!findUnit) { // Если его нет - не можем удалить то чего нет
        console.log(`Товара ${productUnit.name} нет в корзине, что бы удалить`)
        return sellectCart
    }
    const findUnitIndex = sellectCart.findIndex(prod => prod.id === product)
    if (findUnitIndex !== -1) {
        sellectCart.splice(findUnitIndex, 1)
        console.log(`Товар ${findUnit.name} весь удален из корзины`)
        return sellectCart
    }
}
function changeQuantity(sellectCart, product, newQuantity) {
    if (!alarm(sellectCart)) return
    const productUnit = products.find(unit => unit.id == product) // ищем свойства продукта по ID
    const findUnit = sellectCart.find(unit => unit.id == product) //ищем в корзине есть данный продукт
    if (!findUnit) { // Если его нет - не можем поменять значение
        console.log(`Товара ${productUnit.name} нет в корзине, что бы изменить количество`)
        return sellectCart
    }
    if (newQuantity <= 0) {
        const findUnitIndex = sellectCart.findIndex(prod => prod.id === product)
        if (findUnitIndex !== -1) {
            sellectCart.splice(findUnitIndex, 1)
            console.log(`Товар ${findUnit.name} весь удален из корзины`)
            return sellectCart
        }
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
    console.log(`Корзина очищена`)
    return sellectCart
}
module.exports = { addToCart, removeFromCart, changeQuantity, calculateTotal, clearCart, alarm } // экспортируем функции для использования в других файлах
