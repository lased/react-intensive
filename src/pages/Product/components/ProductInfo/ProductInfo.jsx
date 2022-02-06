import { DescriptionBlock, PriceBlock, ProductInfoBlock, StockBlock, TitleBlock } from './blocks'
import { AddToBasket, Helper } from '../../../../shared'

const ProductInfo = ({ isAuth, inBasket, product, onBasketClick }) => (
  <>
    <TitleBlock>{product.title}</TitleBlock>
    <DescriptionBlock>{product.description}</DescriptionBlock>
    <ProductInfoBlock>
      <StockBlock isNotAvailable={!product.inStock}>
        В наличии: <strong>{product.inStock}</strong>
      </StockBlock>
      <PriceBlock>
        Цена: <strong>{Helper.getCurrency(product.price)}</strong>
      </PriceBlock>
    </ProductInfoBlock>
    <AddToBasket
      inBasket={inBasket}
      isNotAvailable={!product.inStock}
      isAuth={isAuth}
      onClick={onBasketClick}
    />
  </>
)

export default ProductInfo
