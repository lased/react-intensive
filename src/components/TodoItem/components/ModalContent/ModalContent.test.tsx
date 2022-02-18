import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import ModalContent from './ModalContent'
import { Helper } from 'shared'
import { ITodo } from 'models'

const todo: ITodo = Object.freeze({
  id: 1,
  text: 'test',
  completed: true,
  bookmark: false,
  createdAt: new Date().toISOString(),
})

describe('test content', () => {
  it('existence content', () => {
    render(<ModalContent todo={todo} onConfirm={jest.fn()} onClose={jest.fn()} />)
    expect(screen.getByText(todo.text)).toBeInTheDocument()
    expect(screen.getByText(Helper.getDate(todo.createdAt))).toBeInTheDocument()
    expect(screen.getByText('Отмена')).toBeInTheDocument()
    expect(screen.getByText('ДА')).toBeInTheDocument()
  })
})
describe('test event', () => {
  it('click on close', () => {
    const mockClose = jest.fn()

    render(<ModalContent todo={todo} onConfirm={jest.fn()} onClose={mockClose} />)
    userEvent.click(screen.getByText('ДА'))
    expect(mockClose).not.toBeCalled()
    userEvent.click(screen.getByText('Отмена'))
    expect(mockClose).toBeCalled()
    expect(mockClose).toBeCalledTimes(1)
  })
  it('click on confirm', () => {
    const mockConfirm = jest.fn()

    render(<ModalContent todo={todo} onConfirm={mockConfirm} onClose={jest.fn()} />)
    userEvent.click(screen.getByText('Отмена'))
    expect(mockConfirm).not.toBeCalled()
    userEvent.click(screen.getByText('ДА'))
    expect(mockConfirm).toBeCalled()
    expect(mockConfirm).toBeCalledTimes(1)
  })
})
