import { BasketActionType } from '../types'

const initialBasket = []

const basketReducer = (products = initialBasket, { type, id, product, loadProducts }) => {
    let newProducts

    switch (type) {
        case BasketActionType.LOAD:
            newProducts = [...loadProducts]
            break
        case BasketActionType.ADD:
            newProducts = [...products, product]
            break
        case BasketActionType.REMOVE:
            newProducts = products.filter((currentProduct) => currentProduct.id !== id)
            break
        case BasketActionType.UPDATE:
            newProducts = products.map(
                (currentProduct) => currentProduct.id === product.id
                    ? { ...currentProduct, ...product }
                    : currentProduct
            )
            break
        default:
            newProducts = [...products]
    }

    return newProducts
}

export default basketReducer