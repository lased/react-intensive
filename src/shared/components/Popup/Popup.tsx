import { cloneElement, FC, useEffect, useRef, useState } from 'react'

import { IPopupProps } from './Popup.types'
import { PopupPortal } from './components'

const Popup: FC<IPopupProps> = ({ children, isOpen, content, onClickOutside }) => {
  const childRef = useRef<HTMLElement>(null)
  const [coords, setCoords] = useState<DOMRect | null>(null)
  const cloneChildren = cloneElement(children, { ref: childRef })

  const onClickOutsideHandler = (event: FocusEvent) => {
    if (event.relatedTarget !== childRef.current && onClickOutside) {
      onClickOutside(event)
    }
  }

  useEffect(() => {
    if (childRef.current) {
      childRef.current.tabIndex = -1
      setCoords(childRef.current.getBoundingClientRect())
    }
  }, [])

  return (
    <>
      {cloneChildren}
      {isOpen && coords && (
        <PopupPortal coords={coords} content={content} onBlur={onClickOutsideHandler} />
      )}
    </>
  )
}

export default Popup
