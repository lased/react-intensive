import { LocalStorageService } from '../../services'
import { AuthActionType } from '../types'
import { USER_KEY } from '../../config'

const userInfo = LocalStorageService.getItem(USER_KEY)
const initialState = { ...(userInfo || {}), isAuth: !!userInfo }

const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case AuthActionType.LOGIN:
            return {
                ...payload,
                isAuth: true
            }
        case AuthActionType.LOGOUT:
            return {
                isAuth: false
            }
        default:
            return { ...state }
    }
}

export default authReducer