import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import TextField from './TextField'

it('existence textarea', () => {
  render(<TextField value='test' onEnter={jest.fn()} />)

  const textarea = screen.getByRole('textbox')

  expect(textarea).toBeInTheDocument()
  expect(textarea).toHaveValue('test')
  expect(textarea).toHaveFocus()
})
it('type textarea', () => {
  render(<TextField value='' onEnter={jest.fn()} />)

  const textarea = screen.getByRole('textbox')

  expect(textarea).toHaveValue('')
  userEvent.type(textarea, 'test')
  expect(textarea).toHaveValue('test')
})
it('test onEnter event', () => {
  const mockEnter = jest.fn()

  render(<TextField value='' onEnter={mockEnter} />)

  const textarea = screen.getByRole('textbox')

  userEvent.type(textarea, '  test  {enter}')
  expect(mockEnter).toBeCalled()
  expect(mockEnter).toBeCalledTimes(1)
  expect(mockEnter).toBeCalledWith('test')
})
