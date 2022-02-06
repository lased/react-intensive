import { useState } from 'react'

import { BasketItemBlock, ImageBlock, PriceBlock, TitleBlock, InputBlock } from './blocks'
import { Helper, Input } from '../../../../'
import { ButtonBlock } from './blocks'

const BasketItem = ({ product, inBasketCount, onRemove, onUpdate }) => {
  const [count, setCount] = useState(inBasketCount)

  const onChangeHandler = (event) => {
    let { value } = event.target

    setCount(value ? +value : value)
  }
  const onBlurHandler = (event) => {
    let { value } = event.target

    if (!value || isNaN(value)) {
      return onRemove(product.id, inBasketCount)
    }

    value = Math.abs(value)

    if (value > product.inStock + inBasketCount) {
      value = product.inStock + inBasketCount
    }

    setCount(value)
    onUpdate(product, inBasketCount, value)
  }

  return (
    <BasketItemBlock>
      <ImageBlock src={product.image} />
      <TitleBlock>{product.title}</TitleBlock>
      <PriceBlock>{Helper.getCurrency(product.price)}</PriceBlock>
      <InputBlock>
        <Input
          name='count'
          type='number'
          value={count}
          onBlur={onBlurHandler}
          onChange={onChangeHandler}
        />
      </InputBlock>
      <ButtonBlock error onClick={() => onRemove(product.id, inBasketCount)}>
        X
      </ButtonBlock>
    </BasketItemBlock>
  )
}

export default BasketItem
