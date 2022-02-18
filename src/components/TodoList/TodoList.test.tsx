import { applyMiddleware, combineReducers, createStore, Store } from 'redux'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import { ETodoActionType, filterReducer, todoReducer, TodosAction } from 'store'
import TodoList from './TodoList'
import { ITodo } from 'models'

const todo: ITodo = Object.freeze({
  id: 1,
  text: 'test',
  completed: false,
  bookmark: false,
  createdAt: new Date().toISOString(),
})

jest.mock('store/actions/todo/todo')

const mockTodosAction = TodosAction as jest.Mocked<typeof TodosAction>
let store = {} as Store
let wrapper = <></>

beforeEach(() => {
  store = createStore(
    combineReducers({ filter: filterReducer, todos: todoReducer }),
    applyMiddleware(thunk)
  )
  wrapper = (
    <Provider store={store}>
      <TodoList />
    </Provider>
  )
})

describe('test content', () => {
  it('load status', () => {
    mockTodosAction.loadAsync.mockImplementation(() => () => true as any)
    render(wrapper)
    expect(screen.getByText('Загрузка...')).toBeInTheDocument()
    expect(screen.queryByText('Список задач пуст')).toBeNull()
    expect(screen.queryByText('Задачи в работе')).toBeNull()
    expect(screen.queryByAltText('dots')).toBeNull()
  })
  it('empty list', async () => {
    mockTodosAction.loadAsync.mockReturnValueOnce({
      type: ETodoActionType.LOAD,
      payload: [],
    } as any)
    render(wrapper)
    expect(await screen.findByText('Список задач пуст')).toBeInTheDocument()
  })
  it('not empty list', async () => {
    mockTodosAction.loadAsync.mockReturnValueOnce({
      type: ETodoActionType.LOAD,
      payload: [todo],
    } as any)
    render(wrapper)
    expect(await screen.findByText('Задачи в работе')).toBeInTheDocument()
    expect(await screen.findAllByAltText('dots')).toHaveLength(1)
  })
})
