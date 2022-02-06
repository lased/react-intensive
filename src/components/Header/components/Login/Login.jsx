import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

import { Modal, AuthForm } from '../../../../shared'
import { LocalStorageService } from '../../../../services'
import { AuthAction } from '../../../../store'
import { USER_KEY } from '../../../../config'
import { LoginBlock } from './blocks'

const getText = (isAuth) => (isAuth ? 'Выйти' : 'Войти')

const Login = () => {
  const [showModal, setShowModal] = useState(false)
  const auth = useSelector((store) => store.auth)
  const dispatch = useDispatch()

  const onCloseHandler = () => setShowModal(false)
  const onSubmitHandler = (user) => {
    LocalStorageService.setItem(USER_KEY, user)
    dispatch(AuthAction.login(user))
    onCloseHandler()
  }
  const onClickHandler = () => {
    if (auth.isAuth) {
      LocalStorageService.removeItem(USER_KEY)
      dispatch(AuthAction.logout())
    } else {
      setShowModal(true)
    }
  }

  return (
    <>
      <LoginBlock error={auth.isAuth} secondary={!auth.isAuth} onClick={onClickHandler}>
        {getText(auth.isAuth)}
      </LoginBlock>
      {!auth.isAuth && showModal && (
        <Modal onClose={onCloseHandler}>
          <AuthForm onSubmit={onSubmitHandler} />
        </Modal>
      )}
    </>
  )
}

export default Login
