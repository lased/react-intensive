import { FC } from 'react'

import { IModalProps } from './Modal.types'
import { Button } from '../Button'

import './Modal.css'
import { createPortal } from 'react-dom'

const Modal: FC<IModalProps> = ({ isOpen, children, maxWidth, maxHeight, onClose }) => {
  const maxWidthStyle = { ...(maxWidth && { maxWidth }) }
  const maxHeightStyle = { ...(maxHeight && { maxHeight }) }

  if (!isOpen) {
    return null
  }

  return createPortal(
    <div className='Modal-container'>
      <div className='Modal-block' style={maxWidthStyle}>
        <Button className='Modal-close-btn' error onClick={onClose}>
          X
        </Button>
        <div className='Modal-content' style={maxHeightStyle}>
          {children}
        </div>
      </div>
    </div>,
    document.body
  )
}

export default Modal
