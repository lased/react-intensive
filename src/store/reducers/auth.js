import { LocalStorageService } from '../../services'
import { USER_KEY } from '../../config'
import { AuthActionType } from '../types'

const userInfo = LocalStorageService.getItem(USER_KEY)
const initialState = { isAuth: !!userInfo, user: userInfo }

const authReducer = (currentState = initialState, { type, user }) => {
    switch (type) {
        case AuthActionType.LOGIN:
            return {
                isAuth: true,
                user
            }
        case AuthActionType.LOGOUT:
            return {
                isAuth: false,
                user: null
            }
        default:
            return { ...currentState }
    }
}

export default authReducer