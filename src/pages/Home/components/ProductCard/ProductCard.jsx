import { memo } from 'react'

import { TitleBlock, ImageBlock, PriceBlock, ProductCardBlock } from './blocks'
import { Button } from '../../../../shared'

const formatPrice = (price) => new Intl.NumberFormat().format(price)
const ProductCard = ({ product, onClick, inBasket }) => {
  const buttonText = inBasket ? 'Удалить из корзины' : 'Добавить в корзину'
  const onClickHandler = () => onClick(product, inBasket)
  console.log('Card', product)

  return (
    <ProductCardBlock>
      <ImageBlock src={product.image} />
      <TitleBlock to={`/product/${product.id}`}>{product.title}</TitleBlock>
      <PriceBlock>{formatPrice(product.price)} руб.</PriceBlock>
      <Button error={inBasket} secondary={!inBasket} onClick={onClickHandler}>
        {buttonText}
      </Button>
    </ProductCardBlock>
  )
}

export default memo(ProductCard)
