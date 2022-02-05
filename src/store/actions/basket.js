import { BasketActionType } from '../'

const getProductInfo = (product) => ({
    id: product.id,
    price: product.price,
})

const addItem = (product) => ({
    type: BasketActionType.ADD, product: getProductInfo(product)
})
const removeItem = (product) => ({
    type: BasketActionType.REMOVE, product: getProductInfo(product)
})

export {
    addItem,
    removeItem
}