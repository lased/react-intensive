import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Popup from './Popup'

it('Popup is open', () => {
  render(
    <Popup isOpen={false} content={<span>content</span>}>
      <div>children</div>
    </Popup>
  )

  expect(screen.getByText('children')).toBeInTheDocument()
  expect(screen.queryByText('content')).toBeNull()
})
it('Popup is close', () => {
  render(
    <Popup isOpen={true} content={<span>content</span>}>
      <div>children</div>
    </Popup>
  )

  expect(screen.getByText('children')).toBeInTheDocument()
  expect(screen.getByText('content')).toBeInTheDocument()
})
it('userEvent click on outside', () => {
  const onClickOutside = jest.fn()

  render(
    <Popup isOpen={true} content={<span>content</span>} onClickOutside={onClickOutside}>
      <div>children</div>
    </Popup>
  )

  userEvent.click(document.body)
  expect(onClickOutside).toBeCalled()
})
it('userEvent click on inside', () => {
  const onClickOutside = jest.fn()
  
  render(
    <Popup isOpen={true} content={<span>content</span>} onClickOutside={onClickOutside}>
      <div>children</div>
    </Popup>
  )

  userEvent.click(screen.getByText('children'))
  expect(onClickOutside).not.toBeCalled()

  userEvent.click(screen.getByText('content'))
  expect(onClickOutside).not.toBeCalled()
})
