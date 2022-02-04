import { BasketBlock } from './blocks'
import { useBasket } from '../../../../hooks'
import { Helper } from '../../../../shared'

const getSum = (products) =>
  products.reduce((acc, product) => acc + product.price * product.count, 0)

const Header = () => {
  const { basket } = useBasket()

  return (
    <BasketBlock>
      <div>
        В корзине товаров: <strong>{basket.length}</strong>
      </div>
      <div>
        на сумму: <strong>{Helper.getCurrency(getSum(basket))}</strong>
      </div>
    </BasketBlock>
  )
}

export default Header
