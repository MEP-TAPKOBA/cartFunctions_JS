const products = [
    { id: 1, name: "Шампунь", price: 5.99 },
    { id: 2, name: "Мыло", price: 1.99 },
    { id: 3, name: "Зубная паста", price: 2.49 },
    { id: 4, name: "Гель для душа", price: 4.50 },
    { id: 5, name: "Бальзам для волос", price: 6.75 },
    { id: 6, name: "Крем для рук", price: 3.80 }
]
let cart = [
    { id: 1, name: "Шампунь", price: 5.99, quantity: 2 },
    { id: 2, name: "Мыло", price: 1.99, quantity: 3 },
    { id: 3, name: "Зубная паста", price: 2.49, quantity: 1 }
]
function addToCart(sellectCart, product) {
    if (!Array.isArray(sellectCart)) {
        console.log('Неправильный формат данных описания корзины')
        return false
    }
    let productUnit = products.find(unit => unit.id == product) // ищем свойства продукта по ID
    let findUnit = sellectCart.find(unit => unit.id == product) //ищем в корзине есть данный продукт
    if ((typeof findUnit) !== 'undefined') { // Если он есть - добавляем его в корзину.
        findUnit = sellectCart.find(unit => unit.id == product)
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
    if (!Array.isArray(sellectCart)) {
        console.log('Неправильный формат данных описания корзины')
        return false
    }
    const productUnit = products.find(unit => unit.id == product) // ищем свойства продукта по ID
    let findUnit = sellectCart.find(unit => unit.id == product) //ищем в корзине есть данный продукт
    if ((typeof findUnit) == 'undefined') {
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
    if (!Array.isArray(sellectCart)) {
        console.log('Неправильный формат данных описания корзины')
        return false
    }
    const productUnit = products.find(unit => unit.id == product) // ищем свойства продукта по ID
    const findUnit = sellectCart.find(unit => unit.id == product) //ищем в корзине есть данный продукт
    if ((typeof findUnit) == 'undefined') {
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
    console.log(`Теперь продукта ${productUnit.name} в корзине ${findUnit.quantity} шт., общая стоимость товаров ${(findUnit.quantity * findUnit.price).toFixed(2)}$. `)
    return sellectCart
}
function calculateTotal(sellectCart) {
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
    sellectCart.splice(0, sellectCart.length)
    console.log(`Корзина очищена`)
    return sellectCart
}


