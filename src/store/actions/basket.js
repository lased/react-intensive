import { BasketActionType } from '../'

const addItem = (product) => ({ type: BasketActionType.ADD, product })
const removeItem = (product) => ({ type: BasketActionType.REMOVE, product })

export {
    addItem,
    removeItem
}