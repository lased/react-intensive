import { useState } from 'react'

import { Modal } from '../../../../shared'
import { LoginBlock } from './blocks'

const getText = (isAuth) => (isAuth ? 'Выйти' : 'Войти')

const Login = () => {
  const [isAuth, setIsAuth] = useState(false)
  const [isShow, setIsShow] = useState(false)
  const onClickHandler = () => setIsShow(true)
  const onCloseHandler = () => setIsShow(false)

  return (
    <>
      <LoginBlock error={isAuth} secondary={!isAuth} onClick={onClickHandler}>
        {getText(isAuth)}
      </LoginBlock>
      {isShow && <Modal onClose={onCloseHandler}>asd</Modal>}
    </>
  )
}

export default Login
