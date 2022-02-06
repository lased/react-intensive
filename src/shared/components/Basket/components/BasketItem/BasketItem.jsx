import { useState } from 'react'

import { BasketItemBlock, ImageBlock, PriceBlock, TitleBlock, InputBlock } from './blocks'
import { Helper, Input } from '../../../../'
import { ButtonBlock } from './blocks'

const BasketItem = ({ product, onRemove, onUpdate }) => {
  const [count, setCount] = useState(product.count)

  const onChangeHandler = (event) => {
    let { value } = event.target

    setCount(value ? +value : value)
  }
  const onBlurHandler = (event) => {
    let { value } = event.target

    if (!value || isNaN(value)) {
      return onRemove(product)
    }

    value = Math.abs(value)

    if (value > product.inStock) {
      value = product.inStock
    }

    setCount(value)
    onUpdate({ ...product, count: value })
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
      <ButtonBlock error onClick={() => onRemove(product)}>
        X
      </ButtonBlock>
    </BasketItemBlock>
  )
}

export default BasketItem
