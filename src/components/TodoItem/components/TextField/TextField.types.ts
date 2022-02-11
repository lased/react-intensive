import { KeyboardEvent } from 'react'

interface ITextFieldProps {
  value: string
  onEnter: (value: string) => void
}

export type { ITextFieldProps }
