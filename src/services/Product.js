import axios from 'axios'
import { map, from } from 'rxjs'

import { API } from '../config'

class Product {
    static getAll(where = {}) {
        const search = Object
            .keys(where)
            .map(
                (key) => where[key].map(
                    (value) => `${key}=${value}`
                ).join('&')
            )
            .join('&')

        return from(axios.get(`${API}/products/?${search}`)).pipe(
            map(({ data }) => data)
        )
    }
    static getById(id) {
        return from(axios.get(`${API}/products/${id}`)).pipe(
            map(({ data }) => data)
        )
    }
    static update(id, updatedProduct) {
        return from(axios.patch(`${API}/products/${id}`, updatedProduct)).pipe(
            map(({ data }) => data)
        )
    }
}

export default Product