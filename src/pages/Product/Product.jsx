import { useState } from 'react'
import { useParams } from 'react-router-dom'

import {
  DescriptionBlock,
  ImageBlock,
  PriceBlock,
  ProductBlock,
  ProductInfoBlock,
  StockBlock,
  TitleBlock,
} from './blocks'
import { Product as ProductService } from '../../services'
import { useAuth, useBasket, useObservable } from '../../hooks'
import { AddToBasket, Button, Helper } from '../../shared'
import { UpdateForm } from './components'

const Product = () => {
  const { id } = useParams()
  const [product, setProduct] = useObservable(ProductService.getById, null, id)
  const { basket, addToBasket, removeFromBasket } = useBasket()
  const [inEditorMode, setInEditorMode] = useState(false)
  const { isAuth, user } = useAuth()

  const inBasket = basket.some((currentProduct) => currentProduct.id === +id)
  const isNotAvailable = product && !product.inStock

  const showUpdateForm = () => setInEditorMode(!inEditorMode)
  const onClickHandler = () => {
    if (inBasket) {
      removeFromBasket(product)
    } else {
      addToBasket(product)
    }
  }
  const onUpdateProduct = (recivedProduct) => {
    const updatedProduct = { ...product, ...recivedProduct }

    ProductService.update(product.id, updatedProduct).subscribe((data) => {
      if (data) {
        setInEditorMode(!inEditorMode)
        setProduct(updatedProduct)
      }
    })
  }

  return (
    <ProductBlock>
      {product ? (
        <>
          {isAuth && user && user.role === 'admin' && (
            <Button secondary={!inEditorMode} error={inEditorMode} onClick={showUpdateForm}>
              {inEditorMode ? 'Отмена' : 'Редактировать'}
            </Button>
          )}
          <ImageBlock src={product.image} />
          {inEditorMode ? (
            <UpdateForm data={product} onSubmit={onUpdateProduct} />
          ) : (
            <>
              <TitleBlock>{product.title}</TitleBlock>
              <DescriptionBlock>{product.description}</DescriptionBlock>
              <ProductInfoBlock>
                <StockBlock isNotAvailable={isNotAvailable}>
                  В наличии: <strong>{product.inStock}</strong>
                </StockBlock>
                <PriceBlock>
                  Цена: <strong>{Helper.getCurrency(product.price)}</strong>
                </PriceBlock>
              </ProductInfoBlock>
              <AddToBasket
                inBasket={inBasket}
                isNotAvailable={isNotAvailable}
                isAuth={isAuth}
                onClick={onClickHandler}
              />
            </>
          )}
        </>
      ) : (
        <p>Загрузка...</p>
      )}
    </ProductBlock>
  )
}

export default Product
