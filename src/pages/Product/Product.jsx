import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

import { ImageBlock } from './components/ProductInfo/blocks'
import { ProductInfo, UpdateForm } from './components'
import { ProductService } from '../../services'
import { useObservable } from '../../hooks'
import { BasketAction } from '../../store'
import { ProductBlock } from './blocks'
import { Button } from '../../shared'

const Product = () => {
  const { id } = useParams()
  const [product, setProduct] = useObservable(ProductService.getById, null, id)
  const [inEditorMode, setInEditorMode] = useState(false)
  const basket = useSelector((store) => store.basket)
  const auth = useSelector((store) => store.auth)
  const dispatch = useDispatch()

  const inBasket = basket.find((basketProduct) => basketProduct.id === product.id)
  const showUpdateForm = () => setInEditorMode(!inEditorMode)
  const onUpdateProduct = (recivedProduct) => {
    const updatableProduct = { ...product, ...recivedProduct }

    ProductService.update(product.id, updatableProduct).subscribe((updatedProduct) => {
      if (updatedProduct) {
        setInEditorMode(!inEditorMode)
        setProduct(updatedProduct)
      }
    })
  }
  const onBasketClickHandler = () => {
    if (inBasket) {
      product.inStock += inBasket.count
      dispatch(BasketAction.removeItemAsync(product.id, inBasket.count))
    } else {
      product.inStock -= 1
      dispatch(BasketAction.addItemAsync(product, 1))
    }
  }

  return (
    <ProductBlock>
      {product ? (
        <>
          {auth.isAuth && auth.user && auth.user.role === 'admin' && (
            <Button secondary={!inEditorMode} error={inEditorMode} onClick={showUpdateForm}>
              {inEditorMode ? 'Отмена' : 'Редактировать'}
            </Button>
          )}
          <ImageBlock src={product.image} />
          {inEditorMode ? (
            <UpdateForm data={product} onSubmit={onUpdateProduct} />
          ) : (
            <ProductInfo
              product={product}
              isAuth={auth.isAuth}
              inBasket={inBasket}
              onBasketClick={onBasketClickHandler}
            />
          )}
        </>
      ) : (
        <p>Загрузка...</p>
      )}
    </ProductBlock>
  )
}

export default Product
// const onClickHandler = () => {
//   if (inBasket) {
//     product.inStock += inBasket.count
//     dispatch(BasketAction.removeItemAsync(inBasket.id, inBasket.count))
//   } else {
//     product.inStock -= 1
//     dispatch(BasketAction.addItemAsync(product, 1))
//   }
// }
