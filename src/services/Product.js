import axios from 'axios'

import { API } from './config'

const getProducts = () => {
    return axios.get(`${API}/products`)
}

export {
    getProducts
}