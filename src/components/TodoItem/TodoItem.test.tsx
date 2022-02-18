import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { applyMiddleware, createStore, Store } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import { todoReducer } from 'store'
import TodoItem from './TodoItem'
import { ITodo } from 'models'

const mockRemoveAsync = jest.fn(() => ({}))
const mockUpdateAsync = jest.fn(() => ({}))

jest.mock('store/actions/todo/todo', () => ({
  removeAsync: () => mockRemoveAsync,
  updateAsync: () => mockUpdateAsync,
}))

const todo: ITodo = Object.freeze({
  id: 1,
  text: 'test',
  completed: false,
  bookmark: false,
  createdAt: new Date().toISOString(),
})
let todoStore = {} as Store
let wrapper = <></>

beforeEach(() => {
  todoStore = createStore(todoReducer, applyMiddleware(thunk))
  wrapper = (
    <Provider store={todoStore}>
      <TodoItem todo={todo} />
    </Provider>
  )
  mockRemoveAsync.mockClear()
  mockUpdateAsync.mockClear()
})

describe('bookmark image', () => {
  it('hidden bookmark image', () => {
    render(wrapper)
    expect(screen.queryByAltText('star')).toBeNull()
  })
  it('existence bookmark image', () => {
    const newTodo: ITodo = { ...todo, bookmark: true }

    render(
      <Provider store={todoStore}>
        <TodoItem todo={newTodo} />
      </Provider>
    )
    expect(screen.getByAltText('star')).toBeInTheDocument()
    userEvent.click(screen.getByAltText('star'))
    expect(mockUpdateAsync).toBeCalled()
    expect(mockUpdateAsync).toBeCalledTimes(1)
  })
})
describe('popup button', () => {
  it('existence popup button', () => {
    render(wrapper)
    expect(screen.getByAltText('dots')).toBeInTheDocument()
  })
  it('open/close popup', () => {
    render(wrapper)

    const popup = screen.getByAltText('dots')

    userEvent.click(popup)
    expect(screen.getByText('Редактировать')).toBeInTheDocument()
    userEvent.click(popup)
    expect(screen.queryByText('Редактировать')).toBeNull()
    userEvent.click(popup)
    userEvent.click(document.body)
    expect(screen.queryByText('Редактировать')).toBeNull()
  })
  it('dispatch remove', () => {
    render(wrapper)
    userEvent.click(screen.getByAltText('dots'))
    userEvent.click(screen.getByText('Удалить'))
    expect(screen.getByText('ДА')).toBeInTheDocument()
    expect(screen.getByText('Отмена')).toBeInTheDocument()
    userEvent.click(screen.getByText('ДА'))
    expect(mockRemoveAsync).toBeCalled()
    expect(mockRemoveAsync).toBeCalledTimes(1)
  })
  it('dispatch edit', () => {
    render(wrapper)
    expect(screen.queryByRole('textbox')).toBeNull()
    userEvent.click(screen.getByAltText('dots'))
    userEvent.click(screen.getByText('Редактировать'))
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
  it('dispatch bookmark', () => {
    render(wrapper)
    userEvent.click(screen.getByAltText('dots'))
    userEvent.click(screen.getByText('В избранное'))
    expect(mockUpdateAsync).toBeCalled()
    expect(mockUpdateAsync).toBeCalledTimes(1)
  })
  it('dispatch success', () => {
    render(wrapper)
    userEvent.click(screen.getByAltText('dots'))
    userEvent.click(screen.getByText('Выполнено'))
    expect(mockUpdateAsync).toBeCalled()
    expect(mockUpdateAsync).toBeCalledTimes(1)
  })
})
describe('test edit mode', () => {
  it('save updates textarea', () => {
    render(wrapper)
    userEvent.click(screen.getByAltText('dots'))
    userEvent.click(screen.getByText('Редактировать'))
    userEvent.type(screen.getByRole('textbox'), 'test{enter}')
    expect(mockUpdateAsync).toBeCalled()
    expect(mockUpdateAsync).toBeCalledTimes(1)
    expect(screen.queryByRole('textbox')).toBeNull()
  })
})
