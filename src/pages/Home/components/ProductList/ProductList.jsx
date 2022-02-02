import { useEffect, useState } from 'react'

import { getProducts } from '../../../../services'
import { ProductCard } from '../ProductCard'
import { ProductListBlock } from './blocks'

const ProductList = () => {
  const [products, setProducts] = useState(null)

  useEffect(() => {
    getProducts().then(({data}) => setProducts(data))
  }, [])

  return (
    <ProductListBlock>
      {
        products 
          ? products.map((product) => <ProductCard key={product.id} product={product} />) 
          : 'Loading...'
      }
    </ProductListBlock>
  )
}

export default ProductList
