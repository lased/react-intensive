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

  const onClickHandler = () => setShowModal(true)
  const onCloseHandler = () => setShowModal(false)
  const onRemoveHandler = (id, count) => dispatch(BasketAction.removeItemAsync(id, count))
  const onUpdateHandler = (product, prevCount, count) => {
    dispatch(BasketAction.updateItemAsync(product, prevCount, count))
  }

  return (
    <>
      <BasketBlock onClick={onClickHandler}>
        <BasketInfo basket={basket} />
      </BasketBlock>
      {showModal && (
        <Modal maxWidth={600} maxHeight='75vh' onClose={onCloseHandler}>
          <BasketInfo basket={basket} />
          <Basket basket={basket} onRemove={onRemoveHandler} onUpdate={onUpdateHandler} />
        </Modal>
      )}
    </>
  )
}

export default BasketButton
