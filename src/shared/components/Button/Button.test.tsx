import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Button from './Button'

describe('button without props', () => {
  it('empty button', () => {
    render(<Button />)

    const button = screen.getByRole('button')

    expect(button).toBeEmptyDOMElement()
  })
  it('button with text', () => {
    render(<Button>text</Button>)

    const button = screen.getByRole('button')

    expect(button).not.toBeEmptyDOMElement()
    expect(button).toHaveTextContent('text')
  })
})
describe('button with props', () => {
  it('warning button', () => {
    render(<Button warning />)

    const button = screen.getByRole('button')

    expect(button).toHaveClass('Button-warning')
  })
  it('primary button', () => {
    render(<Button primary />)

    const button = screen.getByRole('button')

    expect(button).toHaveClass('Button-primary')
  })
  it('error button', () => {
    render(<Button error />)

    const button = screen.getByRole('button')

    expect(button).toHaveClass('Button-error')
  })
  it('error button with false', () => {
    render(<Button error={false} />)

    const button = screen.getByRole('button')

    expect(button).not.toHaveClass('Button-error')
  })
  it('type button', () => {
    render(<Button type='submit' />)

    const button = screen.getByRole('button')

    expect(button).toHaveAttribute('type', 'submit')
  })
})
describe('button with clickEvent', () => {
  it('click on button', () => {
    const handleChange = jest.fn()

    render(<Button onClick={handleChange} />)

    const button = screen.getByRole('button')

    userEvent.click(button)
    expect(handleChange).toBeCalled()
    expect(handleChange).toBeCalledTimes(1)
  })
})
