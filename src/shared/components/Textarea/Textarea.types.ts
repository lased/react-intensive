import { ChangeEvent, KeyboardEvent } from 'react'

interface ITextareaProps {
  className?: string
  value: string
  name: string
  limit?: number
  error?: string
  label?: string
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
  onEnter?: (event: KeyboardEvent<HTMLTextAreaElement>) => void
}

export type { ITextareaProps }
