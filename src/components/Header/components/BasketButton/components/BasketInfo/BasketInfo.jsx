import { Helper } from '../../../../../../shared'

const getSum = (products) =>
  products.reduce((acc, product) => acc + product.price * product.count, 0)
const getCount = (products) => products.reduce((acc, product) => acc + product.count, 0)

const BasketInfo = ({ basket }) => (
  <>
    <div>
      В корзине товаров: <strong>{getCount(basket)}</strong>
    </div>
    <div>
      на сумму: <strong>{Helper.getCurrency(getSum(basket))}</strong>
    </div>
  </>
)

export default BasketInfo
