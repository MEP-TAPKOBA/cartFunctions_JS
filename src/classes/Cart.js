

class Cart {
    #shop;
    #cart;
    constructor(shop,cart) {
        this.#shop = shop;
        this.#cart = cart // Внедрение зависимости
    }

    show() {
        if (this.#cart.length == 0){
            console.log(`Корзина пуста\n`)
            return
        }
        console.log(`Товары в корзине: \n`);
        this.#cart.forEach(unit => {
            console.log(`№${unit.id}: ${unit.name} стоимостью ${unit.price} за штуку в количестве ${unit.quantity}`);
        });
        console.log('\n')
    }

    find(id) {
        const search = this.#cart.find(unit => unit.id == id);
        if (!search) {
            console.log(`Данного товара нет в корзине`);
            return false;
        }
        return search;
    }

    addTo(id) {
        const addedUnit = this.#shop.find(id);
        if (!addedUnit) return
        let findInCart = this.find(id);
        if (!findInCart) {
            this.#cart.push({ ...addedUnit, quantity: 1 });
            console.log(`Товар добавлен в корзину: ${addedUnit.name}`);
            return
        }
        findInCart.quantity += 1;
        console.log(`Количество товара увеличено: ${findInCart.name}, теперь ${findInCart.quantity} шт.`);
        return
        
    }
    changeQuantity(id, value) {
        const addedUnit = this.#shop.find(id)
        if (!addedUnit) return
        let findInCart = this.find(id)
        if(!findInCart){
            console.log(`Невозможно изменить то, чего нет`)
            return
        }
        findInCart.quantity = value
        console.log(`Количество товара ${findInCart.name} изменено на ${findInCart.quantity} шт.\n`)
        return
    }
    removeFrom(id){
        let findInCart = this.find(id)
        if (!findInCart) {
            console.log(`Нельзя удалить из корзины то чего там нет`)
            return
        }
        console.log(`Товар ${findInCart.name} полностью удален из корзины`)
        const deleteIndex = this.#cart.findIndex(u => u.id == id)
        this.#cart.splice(deleteIndex,1)
    }
    clear(){
        this.#cart = []
        console.log(`Корзина очищена \n`)
    }
} 
module.exports = { Cart };