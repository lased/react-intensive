import { BasketItem } from './components'
import { BasketBlock } from './blocks'

const Basket = ({ basket, onRemove }) => (
  <BasketBlock>
    {!basket.length ? (
      <strong>Корзина пуста</strong>
    ) : (
      basket.map((product) => <BasketItem key={product.id} product={product} onRemove={onRemove} />)
    )}
  </BasketBlock>
)

export default Basket
