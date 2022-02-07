import { BasketService } from '../../services'
import { BasketActionType } from '../'

const load = (products) => ({
    type: BasketActionType.LOAD, loadProducts: products
})
const addItem = (product) => ({
    type: BasketActionType.ADD, product
})
const removeItem = (id) => ({
    type: BasketActionType.REMOVE, id
})
const updateItem = (product) => ({
    type: BasketActionType.UPDATE, product
})

const loadAsync = () =>
    (dispatch) => BasketService
        .getProducts()
        .subscribe((products) => {
            dispatch(load(products))
        })
const addItemAsync = (product, count = 1) =>
    (dispatch) => BasketService
        .addProduct(product, count)
        .subscribe(({ id, price, inStock }) => {
            dispatch(addItem({ id, price, inStock, count }))
        })
const removeItemAsync = (id, count) =>
    (dispatch) => BasketService
        .removeProduct(id, count)
        .subscribe(() => {
            dispatch(removeItem(id))
        })
const updateItemAsync = (product, prevCount, count = 1) =>
    (dispatch) => BasketService
        .updateProduct(product, prevCount, count)
        .subscribe(({ id, price, inStock }) => {
            dispatch(updateItem({ id, price, inStock, count }))
        })

export {
    loadAsync,
    addItemAsync,
    removeItemAsync,
    updateItemAsync
}
