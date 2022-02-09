import { ChangeEvent } from 'react'

interface ITextareaProps {
  value: string
  name: string
  limit?: number
  error?: string
  label?: string
  onChange: (event: ChangeEvent) => void
}

export type { ITextareaProps }
