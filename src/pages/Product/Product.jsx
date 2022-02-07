import { useParams } from 'react-router-dom'
import { useCallback } from 'react'

import { ProductService } from '../../services'
import { useObservable } from '../../hooks'
import { ProductBlock } from './blocks'
import { Info } from './components'

const Product = () => {
  const { id } = useParams()
  const [product, setProduct] = useObservable(ProductService.getById, null, id)

  const onSaveProductHandler = useCallback((recivedProduct) => {
    ProductService.update(recivedProduct.id, recivedProduct).subscribe((updatedProduct) => {
      if (updatedProduct) {
        setProduct(updatedProduct)
      }
    })
  }, [])
  const onUpdateHandler = useCallback((recivedProduct) => setProduct(recivedProduct), [])

  return (
    <ProductBlock>
      {product ? (
        <Info product={product} onSave={onSaveProductHandler} onUpdate={onUpdateHandler} />
      ) : (
        <p>Загрузка...</p>
      )}
    </ProductBlock>
  )
}

export default Product
