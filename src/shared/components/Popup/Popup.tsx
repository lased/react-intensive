import { cloneElement, FC, useEffect, useMemo, useRef, useState } from 'react'

import { IPopupProps } from './Popup.types'
import { PopupPortal } from './components'

const Popup: FC<IPopupProps> = ({ children, isOpen, content, onClickOutside }) => {
  const childRef = useRef<HTMLElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [rect, setRect] = useState<DOMRect | null>(null)
  const cloneChildren = useMemo(() => cloneElement(children, { ref: childRef }), [children])

  const setRectHandler = () => setRect(childRef.current?.getBoundingClientRect() || null)
  const onClickOutsideHandler = (event: MouseEvent) => {
    if (
      isOpen &&
      !childRef.current?.contains(event.target as Node) &&
      !containerRef.current?.contains(event.target as Node)
    ) {
      onClickOutside?.(event)
    }
  }

  useEffect(() => setRectHandler(), [isOpen])

  useEffect(() => {
    window.addEventListener('click', onClickOutsideHandler)
    window.addEventListener('scroll', setRectHandler)
    window.addEventListener('resize', setRectHandler)

    return () => {
      window.removeEventListener('click', onClickOutsideHandler)
      window.removeEventListener('scroll', setRectHandler)
      window.removeEventListener('resize', setRectHandler)
    }
  })

  return (
    <>
      {cloneChildren}
      {isOpen && <PopupPortal rect={rect} content={content} ref={containerRef} />}
    </>
  )
}

export default Popup
