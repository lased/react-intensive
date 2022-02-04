import { memo } from 'react'

import { TitleBlock, ImageBlock, PriceBlock, ProductCardBlock } from './blocks'
import { AddToBasket, Helper } from '../../../../shared'

const formatPrice = (price) => Helper.getCurrency(price)

const ProductCard = ({ product, onClick, inBasket, isAuth }) => {
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
      <AddToBasket
        inBasket={inBasket}
        isNotAvailable={isNotAvailable}
        isAuth={isAuth}
        onClick={onClickHandler}
      />
    </ProductCardBlock>
  )
}

export default memo(ProductCard)
