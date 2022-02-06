import { BasketItemBlock, ImageBlock, PriceBlock, TitleBlock } from './blocks'
import { ButtonBlock } from './blocks'
import { Helper } from '../../../../'

const BasketItem = ({ product, onRemove }) => (
  <BasketItemBlock>
    <ImageBlock src={product.image} />
    <TitleBlock>{product.title}</TitleBlock>
    <PriceBlock>{Helper.getCurrency(product.price)}</PriceBlock>
    <ButtonBlock error onClick={() => onRemove(product)}>
      X
    </ButtonBlock>
  </BasketItemBlock>
)

export default BasketItem
