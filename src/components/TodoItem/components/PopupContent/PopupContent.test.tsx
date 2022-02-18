import { render, screen } from '@testing-library/react'

import PopupContent from './PopupContent'
import { ITodo } from 'models'
import userEvent from '@testing-library/user-event'

const todo: ITodo = Object.freeze({
  id: 1,
  text: 'test',
  completed: false,
  bookmark: false,
  createdAt: new Date().toISOString(),
})

describe('test content', () => {
  it('existence content', () => {
    render(
      <PopupContent
        todo={todo}
        onBookmark={jest.fn()}
        onSuccess={jest.fn()}
        onRemove={jest.fn()}
        onEdit={jest.fn()}
      />
    )
    expect(screen.getByText('В избранное')).toBeInTheDocument()
    expect(screen.getByText('Выполнено')).toBeInTheDocument()
    expect(screen.getByText('Редактировать')).toBeInTheDocument()
    expect(screen.getByText('Удалить')).toBeInTheDocument()
  })
  it('bookmark and completed', () => {
    const newTodo: ITodo = { ...todo, bookmark: true, completed: true }

    render(
      <PopupContent
        todo={newTodo}
        onBookmark={jest.fn()}
        onSuccess={jest.fn()}
        onRemove={jest.fn()}
        onEdit={jest.fn()}
      />
    )
    expect(screen.getByText('Убрать из избранного')).toBeInTheDocument()
    expect(screen.getByText('Вернуть в работу')).toBeInTheDocument()
  })
})
describe('test event', () => {
  it('click on bookmark', () => {
    const mockBookmark = jest.fn()

    render(
      <PopupContent
        todo={todo}
        onBookmark={mockBookmark}
        onSuccess={jest.fn()}
        onRemove={jest.fn()}
        onEdit={jest.fn()}
      />
    )

    userEvent.click(screen.getByText('Выполнено'))
    expect(mockBookmark).not.toBeCalled()
    userEvent.click(screen.getByText('Редактировать'))
    expect(mockBookmark).not.toBeCalled()
    userEvent.click(screen.getByText('Удалить'))
    expect(mockBookmark).not.toBeCalled()
    userEvent.click(screen.getByText('В избранное'))
    expect(mockBookmark).toBeCalled()
    expect(mockBookmark).toBeCalledTimes(1)
    expect(mockBookmark).toBeCalledWith(todo)
  })
  it('click on success', () => {
    const mockSuccess = jest.fn()

    render(
      <PopupContent
        todo={todo}
        onBookmark={jest.fn()}
        onSuccess={mockSuccess}
        onRemove={jest.fn()}
        onEdit={jest.fn()}
      />
    )

    userEvent.click(screen.getByText('В избранное'))
    expect(mockSuccess).not.toBeCalled()
    userEvent.click(screen.getByText('Редактировать'))
    expect(mockSuccess).not.toBeCalled()
    userEvent.click(screen.getByText('Удалить'))
    expect(mockSuccess).not.toBeCalled()
    userEvent.click(screen.getByText('Выполнено'))
    expect(mockSuccess).toBeCalled()
    expect(mockSuccess).toBeCalledTimes(1)
    expect(mockSuccess).toBeCalledWith(todo)
  })
  it('click on edit', () => {
    const mockEdit = jest.fn()

    render(
      <PopupContent
        todo={todo}
        onBookmark={jest.fn()}
        onSuccess={jest.fn()}
        onRemove={jest.fn()}
        onEdit={mockEdit}
      />
    )

    userEvent.click(screen.getByText('В избранное'))
    expect(mockEdit).not.toBeCalled()
    userEvent.click(screen.getByText('Выполнено'))
    expect(mockEdit).not.toBeCalled()
    userEvent.click(screen.getByText('Удалить'))
    expect(mockEdit).not.toBeCalled()
    userEvent.click(screen.getByText('Редактировать'))
    expect(mockEdit).toBeCalled()
    expect(mockEdit).toBeCalledTimes(1)
    expect(mockEdit).toBeCalledWith(todo)
  })
  it('click on remove', () => {
    const mockRemove = jest.fn()

    render(
      <PopupContent
        todo={todo}
        onBookmark={jest.fn()}
        onSuccess={jest.fn()}
        onRemove={mockRemove}
        onEdit={jest.fn()}
      />
    )

    userEvent.click(screen.getByText('В избранное'))
    expect(mockRemove).not.toBeCalled()
    userEvent.click(screen.getByText('Редактировать'))
    expect(mockRemove).not.toBeCalled()
    userEvent.click(screen.getByText('Выполнено'))
    expect(mockRemove).not.toBeCalled()
    userEvent.click(screen.getByText('Удалить'))
    expect(mockRemove).toBeCalled()
    expect(mockRemove).toBeCalledTimes(1)
    expect(mockRemove).toBeCalledWith(todo)
  })
})
