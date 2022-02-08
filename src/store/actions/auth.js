import { LocalStorageService } from '../../services'
import { USER_KEY } from '../../config'
import { AuthActionType } from '../'

const convertToUserStore = (user) => ({
    username: user.username,
    role: user.role,
    isAuth: false
})

const login = (user) => {
    LocalStorageService.setItem(USER_KEY, user)

    return {
        type: AuthActionType.LOGIN, payload: convertToUserStore(user)
    }
}
const logout = () => {
    LocalStorageService.removeItem(USER_KEY)

    return {
        type: AuthActionType.LOGOUT
    }
}

export {
    login,
    logout
}