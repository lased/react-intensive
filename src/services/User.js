import axios from 'axios'
import { map, from } from 'rxjs'

import { API } from '../config'

class User {
    static login(username, password) {
        return from(axios.get(`${API}/users/?username=${username}&password=${password}`)).pipe(
            map(({ data }) => data[0])
        )
    }
}

export default User