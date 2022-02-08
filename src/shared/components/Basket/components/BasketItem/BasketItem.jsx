import { memo } from 'react'

import {
  BasketItemBlock,
  ImageBlock,
  PriceBlock,
  TitleBlock,
  InputBlock,
  ButtonBlock,
} from './blocks'
import { Helper, CountButton } from '../../../../'

const BasketItem = ({ product, inBasketProduct, onRemove, onUpdate }) => {
  const changeCount = (value) => {
    onUpdate(inBasketProduct, value)
  }

  return (
    <BasketItemBlock>
      <ImageBlock src={product.image} />
      <TitleBlock>{product.title}</TitleBlock>
      <PriceBlock>{Helper.getCurrency(product.price)}</PriceBlock>
      <InputBlock>
        <CountButton
          current={inBasketProduct.count}
          min={1}
          max={inBasketProduct.count + inBasketProduct.inStock}
          onUpdate={changeCount}
        />
      </InputBlock>
      <ButtonBlock error onClick={() => onRemove(inBasketProduct)}>
        X
      </ButtonBlock>
    </BasketItemBlock>
  )
}

export default memo(BasketItem)
