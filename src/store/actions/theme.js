import { ThemeActionType } from '../'

const toggle = (theme) => ({
    type: ThemeActionType.TOGGLE, payload: theme
})

export {
    toggle
}