import { BasketActionType } from '../'

const addItem = (product) => ({
    type: BasketActionType.ADD, product
})
const removeItem = (product) => ({
    type: BasketActionType.REMOVE, product
})
const updateItem = (product) => ({
    type: BasketActionType.UPDATE, product
})

export {
    addItem,
    updateItem,
    removeItem
}