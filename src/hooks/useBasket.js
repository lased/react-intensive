import { useEffect, useReducer } from 'react'
import { Subject } from 'rxjs'

import { BasketReducer, BasketAction } from '../store'
import { LocalStorage } from '../services'
import { BASKET_KEY } from '../config'

const BasketSubject = new Subject()

const useBasket = () => {
    const initialState = LocalStorage.getItem(BASKET_KEY) || []

    const [basket, dispatch] = useReducer(BasketReducer, initialState)
    const addToBasket = (recivedData) => {
        BasketSubject.next(BasketAction.addItem(recivedData))
    }
    const removeFromBasket = (recivedData) => {
        BasketSubject.next(BasketAction.removeItem(recivedData))
    }

    useEffect(() => {
        const subscription$ = BasketSubject.subscribe((action) => dispatch(action))

        return () => subscription$.unsubscribe()
    }, [])

    return {
        basket,
        addToBasket,
        removeFromBasket
    }
}

export default useBasket