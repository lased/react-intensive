import { ITodo } from 'models'
import { ETodoActionType } from 'store'
import todoReducer from './todo'

let todos: ITodo[] = []

beforeEach(() => {
  todos = [
    {
      id: 1,
      text: 'todo 1',
      completed: true,
      bookmark: false,
      createdAt: new Date().toISOString(),
    },
    {
      id: 2,
      text: 'todo 2',
      completed: true,
      bookmark: false,
      createdAt: new Date().toISOString(),
    },
    {
      id: 3,
      text: 'todo 3',
      completed: true,
      bookmark: false,
      createdAt: new Date().toISOString(),
    },
  ]
})

it('create action', () => {
  const state = todoReducer({ list: [] }, { type: ETodoActionType.CREATE, payload: todos[0] })

  expect(state.list).toHaveLength(1)
  expect(state.list).toEqual([todos[0]])
})
it('update action', () => {
  const updateTodo2 = { ...todos[1], text: 'todo 2 update' }
  const state = todoReducer({ list: todos }, { type: ETodoActionType.UPDATE, payload: updateTodo2 })

  expect(state.list).toHaveLength(3)
  expect(state.list).toContainEqual(updateTodo2)
})
it('remove action', () => {
  const removeTodo2 = todos[1]
  const state = todoReducer({ list: todos }, { type: ETodoActionType.REMOVE, payload: removeTodo2 })

  expect(state.list).toHaveLength(2)
  expect(state.list).not.toContainEqual(removeTodo2)
})
it('load action', () => {
  const state = todoReducer({ list: [] }, { type: ETodoActionType.LOAD, payload: todos })

  expect(state.list).toHaveLength(3)
  expect(state.list).toEqual(todos)
})
