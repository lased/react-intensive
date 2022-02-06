import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'

import { AuthAction } from '../../../../store'
import { Modal, AuthForm } from '../../../../shared'
import { LoginBlock } from './blocks'

const getText = (isAuth) => (isAuth ? 'Выйти' : 'Войти')

const Login = () => {
  const [showModal, setShowModal] = useState(false)
  const auth = useSelector((store) => store.auth)
  const dispatch = useDispatch()

  const onCloseHandler = () => setShowModal(false)
  const onSubmitHandler = (user) => {
    dispatch(AuthAction.login(user))
    onCloseHandler()
  }
  const onClickHandler = () => {
    if (auth.isAuth) {
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
