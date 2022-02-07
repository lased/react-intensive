import { BasketService } from '../../../services'
import { useObservable } from '../../../hooks'
import { BasketItem } from './components'
import { BasketBlock } from './blocks'

const Basket = ({ basket, onRemove, onUpdate }) => {
  const [basketDetail] = useObservable(BasketService.getProducts, null, true)

  return (
    <BasketBlock>
      {!basket.length && <strong>Корзина пуста</strong>}
      {basketDetail ? (
        basket.map((product) => {
          const detail = basketDetail.find((productDetail) => productDetail.id === product.id)

          return (
            <BasketItem
              key={product.id}
              product={detail}
              inBasket={product}
              onRemove={onRemove}
              onUpdate={onUpdate}
            />
          )
        })
      ) : (
        <strong>Загрузка...</strong>
      )}
    </BasketBlock>
  )
}

export default Basket
