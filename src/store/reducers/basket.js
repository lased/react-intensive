import { BasketActionType } from '../types'

const initialState = []

const basketReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case BasketActionType.LOAD:
            return [...payload]
        case BasketActionType.ADD:
            return [...state, payload]
        case BasketActionType.REMOVE:
            return state.filter((currentProduct) => currentProduct.id !== payload.id)
        case BasketActionType.UPDATE:
            return state.map(
                (currentProduct) => currentProduct.id === payload.id
                    ? { ...currentProduct, ...payload }
                    : currentProduct
            )
        default:
            return state
    }
}

export default basketReducer