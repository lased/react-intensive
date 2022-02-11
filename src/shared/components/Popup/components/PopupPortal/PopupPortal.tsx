import { CSSProperties, forwardRef } from 'react'
import { createPortal } from 'react-dom'

import { IPopupPortalProps } from './PopupPortal.types'

import './PopupPortal.css'

const PopupPortal = forwardRef<HTMLDivElement, IPopupPortalProps>(({ rect, content }, ref) => {
  if (!rect) {
    return null
  }

  const styles: CSSProperties = {
    top: `${rect.y}px`,
    left: `${rect.x + rect.width}px`,
  }

  return createPortal(
    <div className='PopupPortal' ref={ref} style={styles}>
      {content}
    </div>,
    document.body
  )
})

export default PopupPortal
