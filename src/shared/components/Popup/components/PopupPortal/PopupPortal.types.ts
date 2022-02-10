import { ReactNode } from 'react'

interface IPopupPortalProps {
  content: ReactNode
  coords: DOMRect
  container?: HTMLElement
  onBlur?: (event: FocusEvent) => void
}

export type { IPopupPortalProps }
