import { ButtonHTMLAttributes, MouseEvent } from 'react'

interface IModalProps {
  isOpen: boolean
  maxWidth?: string | number
  maxHeight?: string | number
  onClose?: (event: MouseEvent<HTMLButtonElement>) => void
}

export type { IModalProps }
