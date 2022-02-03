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
import { useBasket, useObservable } from '../../hooks'
import { Button, Helper } from '../../shared'

const buttonText = (inBasket, isNotAvailable) => {
  if (isNotAvailable) {
    return 'Товар недоступен'
  }
  if (inBasket) {
    return 'Удалить из корзины'
  }

  return 'Добавить в корзину'
}

const Product = () => {
  const { id } = useParams()
  const [product] = useObservable(ProductService.getById, null, id)
  const { basket, addToBasket, removeFromBasket } = useBasket()
  
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
          <Button
            error={inBasket || isNotAvailable}
            secondary={!inBasket && !isNotAvailable}
            onClick={onClickHandler}
          >
            {buttonText(inBasket, isNotAvailable)}
          </Button>
        </>
      ) : (
        <p>Загрузка...</p>
      )}
    </ProductBlock>
  )
}

export default Product
