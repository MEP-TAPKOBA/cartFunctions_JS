const utilts = require('./utilts')
const productLogic = require('./productLogic')
let cart = require('../json/cart.json')
const products = require('../json/products.json')
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });

let argsForFunc1 = choiseFunction.find(f => f.id === 1)

const choiseFunction = [
    {
        id : 1,
        func : () => {utilts.addToCart(cart,argsForFunc1.productID)},   
        productID : 0 }
]
const listActions = [
    "1 : Добавить товар в корзину",
    "2 : Изменения количества товара в корзине",
    "3 : Удаление всего выбраного товара из корзины",
    "4 : Посчитать общую стоимость корзины",
    "5 : Очистить корзину"
]
function autoCall(sellectCart){
    utilts.listOnItems()
    utilts.showCart(sellectCart)
    console.log(`Возможные действия:`)
    listActions.forEach(element =>{
        console.log(element)
    }) 
    let actionSwitch = switchFunc()
    
    
}   
function switchFunc() {
    rl.question(`Введите номер необходимого действия`, (answer) => {
        answer = Number(answer)
        actionSwitch = answer
        if (typeof actionSwitch !== 'number' || Number.isNaN(actionSwitch) ){
            console.log(`Неправильный формат ввода. Проверьте правильность ввода`)
            actionSwitch = switchFunc()
            return actionSwitch
        }
        if (actionSwitch < 0 || actionSwitch >= listActions.length) {
            console.log(`Такой функции не существует`)
            actionSwitch = switchFunc()
            return actionSwitch
        }
        rl.close();
        return actionSwitch
    });
}
function switchArgs(acSw) {
    
}





















module.exports = { autoCall }