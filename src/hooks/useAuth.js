import { useEffect, useState } from 'react'
import { Subject } from 'rxjs'

import { LocalStorage } from '../services'
import { USER_KEY } from '../config'

const AuthSubject = new Subject()

const useAuth = () => {
    const userInfo = LocalStorage.getItem(USER_KEY)
    
    const [isAuth, setIsAuth] = useState(!!userInfo)
    const [user, setUser] = useState(userInfo)

    const login = (recivedUser) => {
        AuthSubject.next(recivedUser)
    }
    const logout = () => {
        AuthSubject.next(null)
    }

    useEffect(() => {
        const subscription$ = AuthSubject.subscribe((recivedUser) => {
            if (recivedUser) {
                const { username, role } = recivedUser
                const newUserInfo = { username, role }

                LocalStorage.setItem(USER_KEY, newUserInfo)
                setIsAuth(true)
                setUser(newUserInfo)
            } else {
                LocalStorage.removeItem(USER_KEY)
                setIsAuth(false)
                setUser(null)
                console.log(user, isAuth)
            }
        })

        return () => subscription$.unsubscribe()
    }, [])

    return {
        isAuth,
        user,
        login,
        logout
    }
}

export default useAuth