import { memo } from 'react'

import { TitleBlock, ImageBlock, PriceBlock, ProductCardBlock } from './blocks'
import { AddToBasket, Helper } from '../../../../shared'

const formatPrice = (price) => Helper.getCurrency(price)

const ProductCard = ({ product, onClick, inBasketProduct, isAuth }) => {
  const onClickHandler = () => {
    if (isAuth && (inBasketProduct || !!product.inStock)) {
      onClick(product, (inBasketProduct && inBasketProduct.count) || 1, inBasketProduct)
    }
  }

  return (
    <ProductCardBlock>
      <ImageBlock src={product.image} />
      <TitleBlock to={`/product/${product.id}`}>{product.title}</TitleBlock>
      <PriceBlock>{formatPrice(product.price)}</PriceBlock>
      <AddToBasket
        inBasket={!!inBasketProduct}
        isNotAvailable={!product.inStock}
        isAuth={isAuth}
        onClick={onClickHandler}
      />
    </ProductCardBlock>
  )
}

export default memo(ProductCard)
