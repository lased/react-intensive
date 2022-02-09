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
  const inBasketProduct = basket.find((basketProduct) => basketProduct.id === product.id)
  const prevInBasketProduct = useRef()
  const dispatch = useDispatch()

  const showUpdateForm = () => setInEditorMode(!inEditorMode)
  const onSaveProductHandler = (recivedProduct) => {
    setInEditorMode((prevInEditorMode) => !prevInEditorMode)
    onSave({ ...product, ...recivedProduct })

    if (inBasketProduct) {
      onUpdate({ ...product, inStock: inBasketProduct.count + inBasketProduct.inStock })
      dispatch(
        BasketAction.updateItemAsync(
          {
            ...inBasketProduct,
            price: recivedProduct.price,
            inStock: recivedProduct.inStock,
          },
          inBasketProduct.count
        )
      )
    }
  }
  const onBasketClickHandler = () => {
    if (inBasketProduct) {
      dispatch(BasketAction.removeItemAsync(inBasketProduct))
      onUpdate({ ...product, inStock: inBasketProduct.count + inBasketProduct.inStock })
    } else {
      dispatch(BasketAction.addItemAsync(product, 1))
    }
  }

  useEffect(() => {
    if (inBasketProduct && product.inStock !== inBasketProduct.inStock) {
      onUpdate({ ...product, inStock: inBasketProduct.inStock })
    }
    if (!inBasketProduct && prevInBasketProduct.current) {
      onUpdate({
        ...product,
        inStock: prevInBasketProduct.current.inStock + prevInBasketProduct.current.count,
      })
    }

    prevInBasketProduct.current = inBasketProduct
  }, [basket])

  return (
    <>
      {auth.isAuth && auth.role === 'admin' && (
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
          inBasketProduct={inBasketProduct}
          onBasketClick={onBasketClickHandler}
        />
      )}
    </>
  )
}

export default memo(Info)
