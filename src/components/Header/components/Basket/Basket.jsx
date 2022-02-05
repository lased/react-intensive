import { useSelector } from 'react-redux'

import { Helper } from '../../../../shared'
import { BasketBlock } from './blocks'

const getSum = (products) => products.reduce((acc, product) => acc + product.price, 0)

const Header = () => {
  const basketSelector = useSelector((store) => store.basket)

  return (
    <BasketBlock>
      <div>
        В корзине товаров: <strong>{basketSelector.length}</strong>
      </div>
      <div>
        на сумму: <strong>{Helper.getCurrency(getSum(basketSelector))}</strong>
      </div>
    </BasketBlock>
  )
}

export default Header
