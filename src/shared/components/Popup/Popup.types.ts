import { ReactElement, ReactNode } from 'react'

interface IPopupProps {
  children: ReactElement
  isOpen: boolean
  content: ReactNode
  onClickOutside?: (event: FocusEvent) => void
}

export type { IPopupProps }
