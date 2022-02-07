import { DescriptionBlock, PriceBlock, ProductInfoBlock, StockBlock, TitleBlock } from './blocks'
import { AddToBasket, Helper } from '../../../../../../shared'

const ProductInfo = ({ isAuth, inBasket, product, onBasketClick }) => {
  const inStockInfo = isNaN(inBasket && inBasket.inStock) ? product.inStock : inBasket.inStock

  return (
    <>
      <TitleBlock>{product.title}</TitleBlock>
      <DescriptionBlock>{product.description}</DescriptionBlock>
      <ProductInfoBlock>
        <StockBlock isNotAvailable={!inStockInfo}>
          В наличии: <strong>{inStockInfo}</strong>
        </StockBlock>
        <PriceBlock>
          Цена: <strong>{Helper.getCurrency(product.price)}</strong>
        </PriceBlock>
      </ProductInfoBlock>
      <AddToBasket
        inBasket={!!inBasket}
        isNotAvailable={!product.inStock}
        isAuth={isAuth}
        onClick={onBasketClick}
      />
    </>
  )
}

export default ProductInfo
