import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

import { ImageBlock } from './components/ProductInfo/blocks'
import { Product as ProductService } from '../../services'
import { useObservable } from '../../hooks'
import { ProductInfo, UpdateForm } from './components'
import { ProductBlock } from './blocks'
import { Button } from '../../shared'

const Product = () => {
  const { id } = useParams()
  const [product, setProduct] = useObservable(ProductService.getById, null, id)
  const [inEditorMode, setInEditorMode] = useState(false)
  const auth = useSelector((store) => store.auth)

  const showUpdateForm = () => setInEditorMode(!inEditorMode)
  const onUpdateProduct = (recivedProduct) => {
    const updatedProduct = { ...product, ...recivedProduct }

    ProductService.update(product.id, updatedProduct).subscribe((data) => {
      if (data) {
        setInEditorMode(!inEditorMode)
        setProduct(updatedProduct)
      }
    })
  }

  return (
    <ProductBlock>
      {product ? (
        <>
          {auth.isAuth && auth.user && auth.user.role === 'admin' && (
            <Button secondary={!inEditorMode} error={inEditorMode} onClick={showUpdateForm}>
              {inEditorMode ? 'Отмена' : 'Редактировать'}
            </Button>
          )}
          <ImageBlock src={product.image} />
          {inEditorMode ? (
            <UpdateForm data={product} onSubmit={onUpdateProduct} />
          ) : (
            <ProductInfo product={product} />
          )}
        </>
      ) : (
        <p>Загрузка...</p>
      )}
    </ProductBlock>
  )
}

export default Product
