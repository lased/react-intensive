import { ThemeActionType } from '../types'

const initialTheme = 'dark'

const themeReducer = (currentTheme = initialTheme, { type, theme }) => {
    let newTheme

    switch (type) {
        case ThemeActionType.TOGGLE:
            newTheme = theme
            break
        default:
            newTheme = currentTheme
    }

    return newTheme
}

export default themeReducer