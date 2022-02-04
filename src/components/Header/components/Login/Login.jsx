import { useState } from 'react'

import { useAuth } from '../../../../hooks'
import { Modal } from '../../../../shared'
import { AuthForm } from './components'
import { LoginBlock } from './blocks'

const getText = (isAuth) => (isAuth ? 'Выйти' : 'Войти')

const Login = () => {
  const { isAuth, login, logout } = useAuth()
  const [isShow, setIsShow] = useState(false)
  const onClickHandler = () => (isAuth ? logout() : setIsShow(true))
  const onCloseHandler = () => setIsShow(false)
  const onSubmitHandler = (user) => login(user)

  return (
    <>
      <LoginBlock error={isAuth} secondary={!isAuth} onClick={onClickHandler}>
        {getText(isAuth)}
      </LoginBlock>
      {!isAuth && isShow && (
        <Modal onClose={onCloseHandler}>
          <AuthForm onSubmit={onSubmitHandler} />
        </Modal>
      )}
    </>
  )
}

export default Login
