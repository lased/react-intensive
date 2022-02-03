import { memo, useCallback } from 'react'

import { Product } from '../../../../services'
import { useObservable, useBasket } from '../../../../hooks'
import { ProductCard } from '../ProductCard'
import { ProductListBlock } from './blocks'

const ProductList = () => {
  const [products] = useObservable(Product.getAll)
  const { basket, addToBasket, removeFromBasket } = useBasket()
  const onClickHandler = useCallback((product, inBasket) => {
    if (inBasket) {
      removeFromBasket(product.id)
    } else {
      addToBasket(product.id)
    }
  }, [])

  return (
    <ProductListBlock>
      {products ? (
        products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            inBasket={basket.includes(product.id)}
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
