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

    document.body.classList.remove(currentTheme)
    document.body.classList.add(newTheme)

    return newTheme
}

export default themeReducer