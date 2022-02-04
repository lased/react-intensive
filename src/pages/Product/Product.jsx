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
import { AddToBasket, Helper } from '../../shared'

const Product = () => {
  const { id } = useParams()
  const [product] = useObservable(ProductService.getById, null, id)
  const { basket, addToBasket, removeFromBasket } = useBasket()
  const { isAuth } = useAuth()

  const inBasket = basket.some((currentProduct) => currentProduct.id === +id)
  const isNotAvailable = product && !product.inStock

  const onClickHandler = () => {
    if (inBasket) {
      removeFromBasket(product)
    } else {
      addToBasket(product)
    }
  }

  return (
    <ProductBlock>
      {product ? (
        <>
          <ImageBlock src={product.image} />
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
      ) : (
        <p>Загрузка...</p>
      )}
    </ProductBlock>
  )
}

export default Product
