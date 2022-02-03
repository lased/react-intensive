import { BasketActionType } from '../'
import { LocalStorage } from '../../services'
import { BASKET_KEY } from '../../config'

const BasketReducer = (products, { type, product }) => {
    let newProducts

    switch (type) {
        case BasketActionType.ADD:
            newProducts = [...products, product]
            break
        case BasketActionType.REMOVE:
            newProducts = products.filter((currentProduct) => {
                if (currentProduct.id === product.id) {
                    const diff = currentProduct.count - product.count

                    if (diff <= 0) {
                        return false
                    }

                    return { ...currentProduct, count: diff }
                }

                return true
            })
            break
        default:
            newProducts = products
    }

    LocalStorage.setItem(BASKET_KEY, newProducts)

    return newProducts
}

export default BasketReducer