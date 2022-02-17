import { render, screen } from '@testing-library/react'

import Textarea from './Textarea'

describe('textarea with props', () => {
  it('textarea without value', () => {
    const handleChange = jest.fn()

    render(<Textarea name='test' value='' onChange={handleChange} />)

    const textarea = screen.getByRole('textbox')

    expect(textarea).not.toHaveValue()
  })
  it('textarea with value', () => {
    const handleChange = jest.fn()

    render(<Textarea name='test' value='test' onChange={handleChange} />)

    const textarea = screen.getByRole('textbox')

    expect(textarea).toHaveValue('test')
  })
  it('textarea with error', () => {
    const handleChange = jest.fn()

    render(<Textarea error='error' name='test' value='test' onChange={handleChange} />)

    const error = screen.getByText('error')

    expect(error).toBeInTheDocument()
  })
  it('textarea with limit', () => {
    const handleChange = jest.fn()

    render(<Textarea limit={2} name='test' value='test' onChange={handleChange} />)

    const limit = screen.getByText(/2/)
    const error = screen.queryByText('error')

    expect(limit).toBeInTheDocument()
    expect(error).toBeNull()
  })
})
