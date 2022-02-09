import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import { memo, useCallback, useRef, useEffect } from 'react'

import { useObservable } from '../../../../hooks'
import { ProductService } from '../../../../services'
import { ProductCard } from '../ProductCard'
import { ProductListBlock } from './blocks'
import { BasketAction } from '../../../../store'

const ProductList = () => {
  const basket = useSelector((store) => store.basket, shallowEqual)
  const auth = useSelector((store) => store.auth, shallowEqual)
  const [products, setProducts] = useObservable(ProductService.getAll)
  const prevBasket = useRef(basket)
  const dispatch = useDispatch()

  const onClickHandler = useCallback((product, count, inBasketProduct) => {
    if (inBasketProduct) {
      dispatch(BasketAction.removeItemAsync(inBasketProduct))
    } else {
      dispatch(BasketAction.addItemAsync(product, count))
    }
  }, [])

  useEffect(() => {
    if (basket.length < prevBasket.current.length) {
      const removedProduct = prevBasket.current.filter(
        (prevProduct) => !basket.some((product) => product.id === prevProduct.id)
      )[0]

      if (removedProduct) {
        setProducts(
          products.map((product) =>
            product.id !== removedProduct.id
              ? product
              : { ...product, inStock: removedProduct.inStock + removedProduct.count }
          )
        )
      }
    }

    prevBasket.current = basket
  }, [basket])

  return (
    <ProductListBlock>
      {products ? (
        products.map((product) => {
          const inBasketProduct = basket.find((currentProduct) => currentProduct.id === product.id)

          return (
            <ProductCard
              key={product.id}
              product={product}
              inBasketProduct={inBasketProduct || null}
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
