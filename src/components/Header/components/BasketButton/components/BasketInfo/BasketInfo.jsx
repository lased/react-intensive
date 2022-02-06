import { Helper } from '../../../../../../shared'

const getSum = (products) => products.reduce((acc, product) => acc + product.price, 0)

const BasketInfo = ({ basket }) => (
  <>
    <div>
      В корзине товаров: <strong>{basket.length}</strong>
    </div>
    <div>
      на сумму: <strong>{Helper.getCurrency(getSum(basket))}</strong>
    </div>
  </>
)

export default BasketInfo
