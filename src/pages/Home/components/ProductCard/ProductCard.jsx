import { memo } from 'react'

import { TitleBlock, ImageBlock, PriceBlock, ProductCardBlock } from './blocks'
import { AddToBasket, Helper } from '../../../../shared'

const formatPrice = (price) => Helper.getCurrency(price)

const ProductCard = ({ product, onClick, inBasket, inBasketCount, isAuth }) => {
  const isNotAvailable = !product.inStock
  const onClickHandler = () => {
    if (isAuth && (inBasket || !isNotAvailable)) {
      onClick(product, inBasketCount)
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
