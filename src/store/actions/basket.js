import { BasketActionType } from '../'

const addItem = (product, count = 1) => ({
    type: BasketActionType.ADD, product: {
        id: product.id,
        price: product.price,
        count: count,
    }
})
const removeItem = (product, count = 1) => ({
    type: BasketActionType.REMOVE, product: {
        id: product.id,
        price: product.price,
        count: count,
    }
})

export {
    addItem,
    removeItem
}