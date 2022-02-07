import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { useState, memo, useCallback } from 'react'

import { Basket, Modal } from '../../../../shared'
import { BasketAction } from '../../../../store'
import { BasketInfo } from './components'
import { BasketBlock } from './blocks'

const BasketButton = () => {
  const [showModal, setShowModal] = useState(false)
  const basket = useSelector((store) => store.basket, shallowEqual)
  const dispatch = useDispatch()

  const onClickHandler = () => setShowModal(true)
  const onCloseHandler = () => setShowModal(false)
  const onRemoveHandler = useCallback(
    (id, count) => dispatch(BasketAction.removeItemAsync(id, count)),
    []
  )
  const onUpdateHandler = useCallback((product, prevCount, count) => {
    dispatch(BasketAction.updateItemAsync(product, prevCount, count))
  }, [])
  
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

export default memo(BasketButton)
