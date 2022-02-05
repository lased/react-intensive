import { useSelector, useDispatch } from 'react-redux'
import { memo, useCallback } from 'react'

import { useObservable } from '../../../../hooks'
import { Product } from '../../../../services'
import { ProductCard } from '../ProductCard'
import { ProductListBlock } from './blocks'
import { BasketAction } from '../../../../store'

const ProductList = () => {
  const basketSelector = useSelector((store) => store.basket)
  const authSelector = useSelector((store) => store.auth)
  const [products] = useObservable(Product.getAll)
  const dispatch = useDispatch()

  const onClickHandler = useCallback((product, inBasket) => {
    if (inBasket) {
      dispatch(BasketAction.removeItem(product))
    } else {
      dispatch(BasketAction.addItem(product))
    }
  }, [])

  return (
    <ProductListBlock>
      {products ? (
        products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            inBasket={basketSelector.some((currentProduct) => currentProduct.id === product.id)}
            isAuth={authSelector.isAuth}
            onClick={onClickHandler}
          />
        ))
      ) : (
        <p>Загрузка...</p>
      )}
    </ProductListBlock>
  )
}

export default memo(ProductList)
