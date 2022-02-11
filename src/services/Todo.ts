import axios from 'axios'

import { ITodo } from '../models'
import { API } from 'config'

const update = (todo: ITodo) =>
  axios.put(`${API}/todos/${todo.id}`, todo).then(({ data }): ITodo => data)
const remove = (todo: ITodo) =>
  axios.delete(`${API}/todos/${todo.id}`).then((): ITodo => ({ ...todo }))
const create = (todo: ITodo) => axios.post(`${API}/todos`, todo).then(({ data }): ITodo => data)
const findAll = () => axios.get(`${API}/todos`).then(({ data }): ITodo[] => data)

export { create, findAll, update, remove }
