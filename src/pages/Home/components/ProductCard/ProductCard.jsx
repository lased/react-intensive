import { TitleBlock, ImageBlock, PriceBlock, ProductCardBlock } from './blocks'
import { Button } from '../../../../shared'

const formatPrice = (price) => new Intl.NumberFormat().format(price)
const ProductCard = ({ product }) => {
  return (
    <ProductCardBlock>
      <ImageBlock src={product.image} />
      <TitleBlock>{product.title}</TitleBlock>
      <PriceBlock>{formatPrice(product.price)} руб.</PriceBlock>
      <Button secondary>Добавить в корзину</Button>
    </ProductCardBlock>
  )
}

export default ProductCard
