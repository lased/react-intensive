import { render, screen } from '@testing-library/react'

import PopupPortal from './PopupPortal'

it('PopupPortal in the document', () => {
  render(<PopupPortal content={<span>test</span>} rect={{} as DOMRect} />)

  const content = screen.getByText('test')

  expect(content).toBeInTheDocument()
})
