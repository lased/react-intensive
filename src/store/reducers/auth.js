import { LocalStorage } from '../../services'
import { USER_KEY } from '../../config'
import { AuthActionType } from '../types'

const userInfo = LocalStorage.getItem(USER_KEY)
const initialState = { isAuth: !!userInfo, user: userInfo }

const authReducer = (currentState = initialState, { type, user }) => {
    switch (type) {
        case AuthActionType.LOGIN: {
            LocalStorage.setItem(USER_KEY, user)

            return {
                isAuth: true,
                user
            }
        }
        case AuthActionType.LOGOUT: {
            LocalStorage.removeItem(USER_KEY)

            return {
                isAuth: false,
                user: null
            }
        }
        default:
            return currentState
    }
}

export default authReducer