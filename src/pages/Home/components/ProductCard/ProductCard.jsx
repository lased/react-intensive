import { memo } from 'react'

import { TitleBlock, ImageBlock, PriceBlock, ProductCardBlock } from './blocks'
import { Button, Helper } from '../../../../shared'

const formatPrice = (price) => Helper.getCurrency(price)
const buttonText = (inBasket, isNotAvailable) => {
  if (isNotAvailable) {
    return 'Товар недоступен'
  }
  if (inBasket) {
    return 'Удалить из корзины'
  }

  return 'Добавить в корзину'
}

const ProductCard = ({ product, onClick, inBasket }) => {
  const isNotAvailable = !product.inStock
  const onClickHandler = () => {
    if (!isNotAvailable) {
      onClick(product, inBasket)
    }
  }
  return (
    <ProductCardBlock>
      <ImageBlock src={product.image} />
      <TitleBlock to={`/product/${product.id}`}>{product.title}</TitleBlock>
      <PriceBlock>{formatPrice(product.price)}</PriceBlock>
      <Button
        error={inBasket || isNotAvailable}
        secondary={!inBasket && !isNotAvailable}
        onClick={onClickHandler}
      >
        {buttonText(inBasket, isNotAvailable)}
      </Button>
    </ProductCardBlock>
  )
}

export default memo(ProductCard)
