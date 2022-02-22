import { render, screen } from '@testing-library/react'

import Modal from './Modal'

describe('without children', () => {
  it('Modal is open', () => {
    render(<Modal isOpen={true} />)
    expect(document.body.childNodes).toHaveLength(2)
  })
  it('Modal is close', () => {
    render(<Modal isOpen={false} />)
    expect(document.body.childNodes).toHaveLength(1)
  })
})
describe('with children', () => {
  it('children content', () => {
    render(<Modal isOpen={true}>Test</Modal>)

    const children = screen.getByText('Test')

    expect(children).toBeInTheDocument()
  })
})
