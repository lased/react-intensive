import { BasketActionType } from '../'
import { LocalStorage } from '../../services'
import { BASKET_KEY } from '../../config'

const BasketReducer = (products, { type, product }) => {
    const productInfo = {
        id: product.id,
        price: product.price
    }
    let newProducts = products

    switch (type) {
        case BasketActionType.ADD:
            newProducts = [...products, productInfo]
            break
        case BasketActionType.REMOVE:
            newProducts = products.filter((currentProduct) => currentProduct.id !== product.id)
            break
    }

    LocalStorage.setItem(BASKET_KEY, newProducts)

    return newProducts
}

export default BasketReducer