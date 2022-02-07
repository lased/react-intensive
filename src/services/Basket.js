import axios from 'axios'
import { of, map, from, switchMap } from 'rxjs'

import { API } from '../config'
import Product from './Product'

class Basket {
    static getProduct(id) {
        return from(axios.get(`${API}/basket/${id}`)).pipe(
            map(({ data }) => data)
        )
    }

    static getProducts(more = false) {
        return from(axios.get(`${API}/basket`)).pipe(
            map(({ data }) => data),
            switchMap(
                (products) => products.length && more
                    ? Product.getAll({ id: products.map((product) => product.id) })
                    : of(products)
            )
        )
    }

    static addProduct({ id, price, inStock }, count) {
        const stockChange = inStock - count

        return from(axios.post(`${API}/basket`, { id, count, price, inStock: stockChange }))
            .pipe(
                map(({ data }) => data),
                switchMap(() => Product.update(id, { inStock: stockChange }))
            )
    }

    static removeProduct(id, count) {
        return from(axios.delete(`${API}/basket/${id}`))
            .pipe(
                map(({ data }) => data),
                switchMap(() => Product.getById(id)),
                switchMap((product) => Product.update(id, { inStock: product.inStock + count }))
            )
    }

    static updateProduct({ id, price, inStock }, prevCount, count) {
        const stockChange = inStock + prevCount - count

        return from(axios.patch(`${API}/basket/${id}`, { price, count, inStock: stockChange }))
            .pipe(
                map(({ data }) => data),

                switchMap(() => Product.update(id, { inStock: stockChange }))
            )
    }
}

export default Basket