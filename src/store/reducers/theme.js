import { ThemeActionType } from '../types'

const initialState = 'dark'

const themeReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ThemeActionType.TOGGLE:
            return payload
        default:
            return state
    }
}

export default themeReducer