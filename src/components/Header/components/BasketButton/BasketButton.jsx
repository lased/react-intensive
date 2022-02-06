import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'

import { Basket, Modal } from '../../../../shared'
import { BasketAction } from '../../../../store'
import { BasketInfo } from './components'
import { BasketBlock } from './blocks'

const BasketButton = () => {
  const [showModal, setShowModal] = useState(false)
  const basket = useSelector((store) => store.basket)
  const dispatch = useDispatch()

  const onRemoveHandler = (product) => dispatch(BasketAction.removeItem(product))
  const onClickHandler = () => setShowModal(true)
  const onCloseHandler = () => setShowModal(false)

  return (
    <>
      <BasketBlock onClick={onClickHandler}>
        <BasketInfo basket={basket} />
      </BasketBlock>
      {showModal && (
        <Modal maxWidth={600} maxHeight='75vh' onClose={onCloseHandler}>
          <BasketInfo basket={basket} />
          <Basket basket={basket} onRemove={onRemoveHandler} />
        </Modal>
      )}
    </>
  )
}

export default BasketButton
