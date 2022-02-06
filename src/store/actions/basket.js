import { BasketActionType } from '../'

const getProductInfo = (product) => ({
    id: product.id,
    image: product.image,
    title: product.title,
    price: product.price,
})

const addItem = (product) => ({
    type: BasketActionType.ADD, product: getProductInfo(product)
})
const removeItem = (product) => ({
    type: BasketActionType.REMOVE, product: getProductInfo(product)
})
const updateItem = (product) => ({
    type: BasketActionType.UPDATE, product: getProductInfo(product)
})

export {
    addItem,
    updateItem,
    removeItem
}