import { BasketItemBlock, ImageBlock, PriceBlock, TitleBlock, InputBlock } from './blocks'
import { ButtonBlock } from './blocks'
import { Helper } from '../../../../'
import { CountButton } from '../../..'

const BasketItem = ({ product, inBasket, onRemove, onUpdate }) => {
  const changeCount = (value) => {
    onUpdate(inBasket, inBasket.count, value)
  }

  return (
    <BasketItemBlock>
      <ImageBlock src={product.image} />
      <TitleBlock>{product.title}</TitleBlock>
      <PriceBlock>{Helper.getCurrency(product.price)}</PriceBlock>
      <InputBlock>
        <CountButton
          current={inBasket.count}
          min={1}
          max={inBasket.count + inBasket.inStock}
          onUpdate={changeCount}
        />
      </InputBlock>
      <ButtonBlock error onClick={() => onRemove(product.id, inBasket.count)}>
        X
      </ButtonBlock>
    </BasketItemBlock>
  )
}

export default BasketItem
