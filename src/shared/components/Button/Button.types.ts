import { ButtonHTMLAttributes, MouseEvent, ReactNode } from 'react'

interface IButtonProps {
  type: ButtonHTMLAttributes<HTMLButtonElement>['type']
  secondary: boolean
  className: string
  primary: boolean
  error: boolean
  children: ReactNode
  onClick: (event: MouseEvent) => void
}

export type { IButtonProps }
