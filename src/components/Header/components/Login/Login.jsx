import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { memo, useState } from 'react'

import { Modal, AuthForm } from '../../../../shared'
import { AuthAction } from '../../../../store'
import { LoginBlock } from './blocks'

const getText = (isAuth) => (isAuth ? 'Выйти' : 'Войти')

const Login = () => {
  const [showModal, setShowModal] = useState(false)
  const auth = useSelector((store) => store.auth, shallowEqual)
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

export default memo(Login)
