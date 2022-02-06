import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

import { ImageBlock } from './components/ProductInfo/blocks'
import { Product as ProductService } from '../../services'
import { ProductInfo, UpdateForm } from './components'
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

  const showUpdateForm = () => setInEditorMode(!inEditorMode)
  const onUpdateProduct = (recivedProduct) => {
    const updatableProduct = { ...product, ...recivedProduct }

    ProductService.update(product.id, updatableProduct).subscribe((updatedProduct) => {
      if (updatedProduct) {
        const inBasket = basket.find((currentProduct) => currentProduct.id === updatedProduct.id)

        setInEditorMode(!inEditorMode)
        setProduct(updatedProduct)

        if (inBasket) {
          if (!updatedProduct.inStock) {
            return dispatch(BasketAction.removeItem(inBasket))
          }

          const { description, ...allProps } = updatedProduct

          if (inBasket.count > updatedProduct.inStock) {
            allProps.count = updatedProduct.inStock
          }

          dispatch(BasketAction.updateItem({ ...inBasket, ...allProps }))
        }
      }
    })
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
            <ProductInfo product={product} />
          )}
        </>
      ) : (
        <p>Загрузка...</p>
      )}
    </ProductBlock>
  )
}

export default Product
