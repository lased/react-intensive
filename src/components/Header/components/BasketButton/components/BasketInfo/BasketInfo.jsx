import { Helper } from '../../../../../../shared'

const BasketInfo = ({ basket }) => {
  const summary = basket.reduce(
    (acc, product) => [acc[0] + product.price * product.count, acc[1] + product.count],
    [0, 0]
  )

  return (
    <>
      <div>
        В корзине товаров: <strong>{summary[1]}</strong>
      </div>
      <div>
        на сумму: <strong>{Helper.getCurrency(summary[0])}</strong>
      </div>
    </>
  )
}

export default BasketInfo
