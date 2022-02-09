import { ButtonHTMLAttributes, MouseEvent } from 'react'

interface IModalProps {
  maxWidth: string | number
  maxHeight: string | number
  type: ButtonHTMLAttributes<HTMLButtonElement>['type']
  onClose: (event: MouseEvent) => void
}

export type { IModalProps }
