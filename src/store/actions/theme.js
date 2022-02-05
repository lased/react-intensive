import { ThemeActionType } from '../'

const toggle = (theme) => ({
    type: ThemeActionType.TOGGLE, theme
})

export {
    toggle
}