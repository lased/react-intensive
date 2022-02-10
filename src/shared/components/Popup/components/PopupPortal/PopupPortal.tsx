import { createPortal } from 'react-dom'
import { FC, useEffect } from 'react'

import { IPopupPortalProps } from './PopupPortal.types'

const PopupPortal: FC<IPopupPortalProps> = ({ coords, content, onBlur }) => {
  const container = document.createElement('div')

  useEffect(() => {
    container.style.position = 'fixed'
    container.style.top = `${coords.y}px`
    container.style.left = `${coords.x + coords.width}px`
    container.tabIndex = -1
    container.onblur = onBlur || null
    document.body.append(container)
    container.focus()

    return () => {
      container.remove()
    }
  }, [content])

  return createPortal(content, container)
}

export default PopupPortal
