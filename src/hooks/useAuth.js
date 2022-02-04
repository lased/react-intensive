import { useEffect, useState } from 'react'
import { Subject } from 'rxjs'

import { LocalStorage } from '../services'
import { USER_KEY } from '../config'

const AuthSubject = new Subject()
const userInfo = LocalStorage.getItem(USER_KEY)

const useAuth = () => {
    const [isAuth, setIsAuth] = useState(!!userInfo)

    const login = (user) => {
        AuthSubject.next(user)
    }
    const logout = () => {
        AuthSubject.next(null)
    }

    useEffect(() => {
        const subscription$ = AuthSubject.subscribe((recivedUser) => {
            if (recivedUser) {
                const { username, role } = recivedUser

                LocalStorage.setItem(USER_KEY, { username, role })
                setIsAuth(true)
            } else {
                LocalStorage.removeItem(USER_KEY)
                setIsAuth(false)
            }
        })

        return () => subscription$.unsubscribe()
    }, [])

    return {
        isAuth,
        login,
        logout
    }
}

export default useAuth