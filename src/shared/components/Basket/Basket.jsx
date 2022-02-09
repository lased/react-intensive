import { BasketService } from '../../../services'
import { useObservable } from '../../../hooks'
import { BasketItem } from './components'
import { BasketBlock } from './blocks'

const Basket = ({ basket, onRemove, onUpdate }) => {
  const [basketDetailProducts] = useObservable(BasketService.getDetailProducts)

  return (
    <BasketBlock>
      {basketDetailProducts && !basket.length && <strong>Корзина пуста</strong>}
      {basketDetailProducts ? (
        basket.map((inBasketProduct) => {
          const detailProduct = basketDetailProducts.find(
            (productDetail) => productDetail.id === inBasketProduct.id
          )

          return (
            <BasketItem
              key={inBasketProduct.id}
              product={detailProduct}
              inBasketProduct={inBasketProduct}
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
