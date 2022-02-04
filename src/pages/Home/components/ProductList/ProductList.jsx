import { memo, useCallback } from 'react'

import { Product } from '../../../../services'
import { useObservable, useBasket, useAuth } from '../../../../hooks'
import { ProductCard } from '../ProductCard'
import { ProductListBlock } from './blocks'

const ProductList = () => {
  const { basket, addToBasket, removeFromBasket } = useBasket()
  const [products] = useObservable(Product.getAll)
  const { isAuth } = useAuth()

  const onClickHandler = useCallback((product, inBasket) => {
    if (inBasket) {
      removeFromBasket(product)
    } else {
      addToBasket(product)
    }
  }, [])

  return (
    <ProductListBlock>
      {products ? (
        products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            inBasket={basket.some((currentProduct) => currentProduct.id === product.id)}
            isAuth={isAuth}
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
