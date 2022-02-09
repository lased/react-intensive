import { BasketService } from '../../services'
import { BasketActionType } from '../'

const convertToBasketProduct = ({ id, inStock, price }) => ({
    id, inStock, price, count: 1
})

const load = (products) => ({
    type: BasketActionType.LOAD, payload: products
})
const addItem = (product) => ({
    type: BasketActionType.ADD, payload: product
})
const removeItem = (product) => ({
    type: BasketActionType.REMOVE, payload: product
})
const updateItem = (product) => ({
    type: BasketActionType.UPDATE, payload: product
})

const loadAsync = () =>
    (dispatch) => {
        BasketService
            .getProducts()
            .subscribe((products) => {
                dispatch(load(products))
            })
    }
const addItemAsync = (product, count) =>
    (dispatch) => {
        BasketService
            .add({ ...convertToBasketProduct(product), count })
            .subscribe((addedProduct) => {
                dispatch(addItem(addedProduct))
            })
    }
const removeItemAsync = (product) =>
    (dispatch) => {
        BasketService
            .remove(product)
            .subscribe(() => {
                dispatch(removeItem(product))
            })
    }
const updateItemAsync = (product, count) =>
    (dispatch) => {
        BasketService
            .update(product, count)
            .subscribe((updatedProduct) => {
                dispatch(updateItem(updatedProduct))
            })
    }

export {
    loadAsync,
    addItemAsync,
    removeItemAsync,
    updateItemAsync
}
