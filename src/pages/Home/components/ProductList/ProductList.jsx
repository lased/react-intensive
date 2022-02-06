import { useSelector, useDispatch } from 'react-redux'
import { memo, useCallback } from 'react'

import { useObservable } from '../../../../hooks'
import { ProductService } from '../../../../services'
import { ProductCard } from '../ProductCard'
import { ProductListBlock } from './blocks'
import { BasketAction } from '../../../../store'

const ProductList = () => {
  const basket = useSelector((store) => store.basket)
  const auth = useSelector((store) => store.auth)
  const [products] = useObservable(ProductService.getAll)
  const dispatch = useDispatch()

  const onClickHandler = useCallback((product, count) => {
    if (count) {
      product.inStock += count
      dispatch(BasketAction.removeItemAsync(product.id, count))
    } else {
      dispatch(BasketAction.addItemAsync(product, 1))
    }
  }, [])

  return (
    <ProductListBlock>
      {products ? (
        products.map((product) => {
          const basketProductInfo = basket.find(
            (currentProduct) => currentProduct.id === product.id
          )

          return (
            <ProductCard
              key={product.id}
              product={product}
              inBasket={!!basketProductInfo}
              inBasketCount={(basketProductInfo && basketProductInfo.count) || null}
              isAuth={auth.isAuth}
              onClick={onClickHandler}
            />
          )
        })
      ) : (
        <p>Загрузка...</p>
      )}
    </ProductListBlock>
  )
}

export default memo(ProductList)
