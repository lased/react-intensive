import { useSelector, useDispatch } from 'react-redux'
import { memo, useCallback } from 'react'

import { useObservable } from '../../../../hooks'
import { Product } from '../../../../services'
import { ProductCard } from '../ProductCard'
import { ProductListBlock } from './blocks'
import { BasketAction } from '../../../../store'

const ProductList = () => {
  const basket = useSelector((store) => store.basket)
  const auth = useSelector((store) => store.auth)
  const [products] = useObservable(Product.getAll)
  const dispatch = useDispatch()

  const onClickHandler = useCallback((product, inBasket) => {
    if (inBasket) {
      dispatch(BasketAction.removeItem(product))
    } else {
      const { id, title, image, inStock, price } = product
      const basketProduct = {
        id,
        title,
        image,
        inStock,
        price,
        count: 1,
      }

      dispatch(BasketAction.addItem(basketProduct))
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
            isAuth={auth.isAuth}
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
