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
    const productUnit = products.find(unit => unit.id == product) // ищем свойства продукта по ID
    const findUnit = sellectCart.find(unit => unit.id == product) //ищем в корзине есть данный продукт
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
