import { AuthActionType } from '../'

const getUserInfo = (user) => ({
    username: user.username,
    role: user.role
})

const login = (user) => ({
    type: AuthActionType.LOGIN, user: getUserInfo(user)
})
const logout = () => ({
    type: AuthActionType.LOGOUT
})

export {
    login,
    logout
}