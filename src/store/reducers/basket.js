import { LocalStorage } from '../../services'
import { BASKET_KEY } from '../../config'
import { BasketActionType } from '../types'

const initialBasket = LocalStorage.getItem(BASKET_KEY) || []

const basketReducer = (products = initialBasket, { type, product }) => {
    let newProducts

    switch (type) {
        case BasketActionType.ADD:
            newProducts = [...products, product]
            break
        case BasketActionType.REMOVE:
            newProducts = products.filter((currentProduct) => currentProduct.id !== product.id)
            break
        case BasketActionType.UPDATE:
            newProducts = products.map(
                (currentProduct) => currentProduct.id === product.id ? product : currentProduct
            )
            break
        default:
            newProducts = [...products]
    }

    LocalStorage.setItem(BASKET_KEY, newProducts)

    return newProducts
}

export default basketReducer