import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { useState, memo, useEffect, useRef } from 'react'

import { ImageBlock } from './components/ProductInfo/blocks'
import { ProductInfo, UpdateForm } from './components'
import { BasketAction } from '../../../../store'
import { Button } from '../../../../shared'

const Info = ({ product, onSave, onUpdate }) => {
  const [inEditorMode, setInEditorMode] = useState(false)
  const basket = useSelector((store) => store.basket, shallowEqual)
  const auth = useSelector((store) => store.auth, shallowEqual)
  const inBasket = basket.find((basketProduct) => basketProduct.id === product.id)
  const prevInBasket = useRef()
  const dispatch = useDispatch()

  const showUpdateForm = () => setInEditorMode(!inEditorMode)
  const onSaveProductHandler = (recivedProduct) => {
    setInEditorMode((prevInEditorMode) => !prevInEditorMode)
    onSave({ ...product, ...recivedProduct })

    if (inBasket) {
      onUpdate({ ...product, inStock: inBasket.count + inBasket.inStock })
      dispatch(
        BasketAction.updateItemAsync(
          {
            ...inBasket,
            price: recivedProduct.price,
            inStock: recivedProduct.inStock,
          },
          inBasket.count,
          inBasket.count
        )
      )
    }
  }
  const onBasketClickHandler = () => {
    if (inBasket) {
      dispatch(BasketAction.removeItemAsync(product.id, inBasket.count))
      onUpdate({ ...product, inStock: inBasket.count + inBasket.inStock })
    } else {
      dispatch(BasketAction.addItemAsync(product, 1))
    }
  }

  useEffect(() => {
    if (inBasket && product.inStock !== inBasket.inStock) {
      onUpdate({ ...product, inStock: inBasket.inStock })
    }
    if (!inBasket && prevInBasket.current) {
      onUpdate({
        ...product,
        inStock: prevInBasket.current.inStock + prevInBasket.current.count,
      })
    }

    prevInBasket.current = inBasket
  }, [basket])

  return (
    <>
      {auth.isAuth && auth.user && auth.user.role === 'admin' && (
        <Button secondary={!inEditorMode} error={inEditorMode} onClick={showUpdateForm}>
          {inEditorMode ? 'Отмена' : 'Редактировать'}
        </Button>
      )}
      <ImageBlock src={product.image} />
      {inEditorMode ? (
        <UpdateForm product={product} onSubmit={onSaveProductHandler} />
      ) : (
        <ProductInfo
          product={product}
          isAuth={auth.isAuth}
          inBasket={inBasket}
          onBasketClick={onBasketClickHandler}
        />
      )}
    </>
  )
}

export default memo(Info)
