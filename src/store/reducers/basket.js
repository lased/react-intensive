import { BasketActionType } from '../'
import { LocalStorage } from '../../services'
import { BASKET_KEY } from '../../config'

const BasketReducer = (products, action) => {
    let newProducts = products

    switch (action.type) {
        case BasketActionType.ADD:
            newProducts = [...products, action.product]
            break
        case BasketActionType.REMOVE:
            newProducts = products.filter((product) => product !== action.product)
            break
    }

    LocalStorage.setItem(BASKET_KEY, newProducts)

    return newProducts
}

export default BasketReducer