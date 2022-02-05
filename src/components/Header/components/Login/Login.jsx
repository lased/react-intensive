import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

import { AuthAction } from '../../../../store'
import { Modal } from '../../../../shared'
import { AuthForm } from './components'
import { LoginBlock } from './blocks'

const getText = (isAuth) => (isAuth ? 'Выйти' : 'Войти')

const Login = () => {
  const [isShow, setIsShow] = useState(false)
  const authSelector = useSelector((store) => store.auth)
  const dispatch = useDispatch()

  const onCloseHandler = () => setIsShow(false)
  const onSubmitHandler = (user) => (dispatch(AuthAction.login(user)), onCloseHandler())
  const onClickHandler = () =>
    authSelector.isAuth ? dispatch(AuthAction.logout()) : setIsShow(true)

  return (
    <>
      <LoginBlock
        error={authSelector.isAuth}
        secondary={!authSelector.isAuth}
        onClick={onClickHandler}
      >
        {getText(authSelector.isAuth)}
      </LoginBlock>
      {!authSelector.isAuth && isShow && (
        <Modal onClose={onCloseHandler}>
          <AuthForm onSubmit={onSubmitHandler} />
        </Modal>
      )}
    </>
  )
}

export default Login
