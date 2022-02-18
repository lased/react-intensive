import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import InputForm from './InputForm'

describe('without events', () => {
  it('existence check', () => {
    render(<InputForm />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
describe('with events', () => {
  it('input event', () => {
    render(<InputForm />)

    const textarea = screen.getByRole('textbox')
    const bigText = Array(161).fill(0).join('')

    userEvent.type(textarea, 'test test')
    expect(textarea).toHaveValue('test test')
    userEvent.clear(textarea)
    userEvent.type(textarea, bigText)
    expect(textarea).toHaveValue(bigText)
  })
  it('button event', () => {
    const mockSubmit = jest.fn()

    render(<InputForm onSubmit={mockSubmit} />)

    const button = screen.getByRole('button')

    userEvent.click(button)
    expect(mockSubmit).not.toBeCalled()
  })
  it('form event', () => {
    const mockSubmit = jest.fn()

    render(<InputForm onSubmit={mockSubmit} />)

    const textarea = screen.getByRole('textbox')
    const button = screen.getByRole('button')
    const bigText = Array(161).fill(0).join('')

    userEvent.click(button)
    expect(mockSubmit).not.toBeCalled()
    userEvent.type(textarea, bigText)
    userEvent.click(button)
    expect(mockSubmit).not.toBeCalled()
    userEvent.clear(textarea)
    userEvent.type(textarea, 'test')
    userEvent.click(button)
    expect(mockSubmit).toBeCalled()
    expect(mockSubmit).toBeCalledTimes(1)
    expect(mockSubmit).toBeCalledWith(
      expect.objectContaining({
        text: 'test',
        bookmark: false,
        completed: false,
      })
    )
  })
})
