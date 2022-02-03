import axios from 'axios'
import { delay, map, from } from 'rxjs'

import { API } from '../config'

class Product {
    static getAll() {
        return from(axios.get(`${API}/products`)).pipe(
            delay(500),
            map(({ data }) => data)
        )
    }
    static getById(id) {
        return from(axios.get(`${API}/products/${id}`)).pipe(
            delay(500),
            map(({ data }) => data)
        )
    }
}

export default Product