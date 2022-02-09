import axios from 'axios'
import { of, map, from, switchMap } from 'rxjs'

import { API } from '../config'
import Product from './Product'

class Basket {
    static getProducts() {
        return from(axios.get(`${API}/basket`)).pipe(
            map(({ data }) => data)
        )
    }

    static getDetailProducts() {
        return from(axios.get(`${API}/basket`)).pipe(
            map(({ data }) => data),
            switchMap(
                (products) => products.length
                    ? Product.getAll({ id: products.map((product) => product.id) })
                    : of(products)
            )
        )
    }

    static add(product) {
        const inStockDiff = product.inStock - product.count

        return from(axios.post(`${API}/basket`, { ...product, inStock: inStockDiff }))
            .pipe(
                map(({ data }) => data),
                switchMap(() => Product.update(product.id, { inStock: inStockDiff })),
                map(() => ({ ...product, inStock: inStockDiff }))
            )
    }

    static remove(product) {
        return from(axios.delete(`${API}/basket/${product.id}`))
            .pipe(
                map(({ data }) => data),
                switchMap(() => Product.update(product.id, {
                    inStock: product.inStock + product.count
                }))
            )
    }

    static update(product, count) {
        const inStockDiff = product.inStock + product.count - count

        return from(axios.patch(`${API}/basket/${product.id}`, {
            ...product, count, inStock: inStockDiff
        }))
            .pipe(
                map(({ data }) => data),
                switchMap(() => Product.update(product.id, { inStock: inStockDiff })),
                map(() => ({ ...product, count, inStock: inStockDiff }))
            )
    }
}

export default Basket