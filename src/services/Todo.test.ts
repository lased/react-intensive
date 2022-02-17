import axios from 'axios'

import { ITodo } from 'models'
import { create, remove, update, findAll } from './Todo'

jest.mock('axios')

const mockAxios = axios as jest.Mocked<typeof axios>
const todos: ITodo[] = [
  Object.freeze({
    text: 'test',
    completed: true,
    bookmark: false,
    createdAt: new Date().toISOString(),
  }),
  Object.freeze({
    text: 'test2',
    completed: false,
    bookmark: true,
    createdAt: new Date().toISOString(),
  }),
]

it('create request', async () => {
  mockAxios.post.mockResolvedValueOnce({ data: todos[0] })

  const createdTodo = await create(todos[0])

  expect(createdTodo).toEqual(todos[0])
})
it('findAll request', async () => {
  mockAxios.get.mockResolvedValueOnce({ data: todos })

  const list = await findAll()

  expect(list).toHaveLength(2)
})
it('update request', async () => {
  const updatedTodo: ITodo = { ...todos[0], bookmark: true, text: 'foobar' }

  mockAxios.put.mockResolvedValueOnce({ data: updatedTodo })

  const todo = await update(updatedTodo)

  expect(todo).toEqual(updatedTodo)
})
it('remove request', async () => {
  mockAxios.delete.mockResolvedValueOnce({ data: todos[0] })

  const todo = await remove(todos[0])

  expect(todo).toEqual(todos[0])
})
