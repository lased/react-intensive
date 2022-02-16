import { ReactElement, ReactNode } from 'react'

interface IPopupProps {
  children: ReactElement
  isOpen: boolean
  content: ReactNode
  onClickOutside?: (event: MouseEvent) => void
}

export type { IPopupProps }
