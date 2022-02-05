import { useSelector, useDispatch } from 'react-redux'

import { DescriptionBlock, PriceBlock, ProductInfoBlock, StockBlock, TitleBlock } from './blocks'
import { AddToBasket, Helper } from '../../../../shared'
import { BasketAction } from '../../../../store'

const ProductInfo = ({ product }) => {
  const basket = useSelector((store) => store.basket)
  const auth = useSelector((store) => store.auth)
  const dispatch = useDispatch()

  const inBasket = basket.some((currentProduct) => currentProduct.id === product.id)
  const { title, description, inStock, price } = product

  const onClickHandler = () => {
    if (inBasket) {
      dispatch(BasketAction.removeItem(product))
    } else {
      dispatch(BasketAction.addItem(product))
    }
  }

  return (
    <>
      <TitleBlock>{title}</TitleBlock>
      <DescriptionBlock>{description}</DescriptionBlock>
      <ProductInfoBlock>
        <StockBlock isNotAvailable={!inStock}>
          В наличии: <strong>{inStock}</strong>
        </StockBlock>
        <PriceBlock>
          Цена: <strong>{Helper.getCurrency(price)}</strong>
        </PriceBlock>
      </ProductInfoBlock>
      <AddToBasket
        inBasket={inBasket}
        isNotAvailable={!inStock}
        isAuth={auth.isAuth}
        onClick={onClickHandler}
      />
    </>
  )
}

export default ProductInfo
