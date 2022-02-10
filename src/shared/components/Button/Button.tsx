import { FC, ForwardedRef, forwardRef, memo } from 'react'

import { IButtonProps } from './Button.types'

import './Button.css'

const typeButton = {
  primary: ['Button-primary'],
  secondary: ['Button-secondary'],
  error: ['Button-error'],
}

const Button = forwardRef<HTMLButtonElement, Partial<IButtonProps>>(
  ({ className, secondary, children, primary, error, type, onClick }, ref) => {
    const customClassName = [
      className,
      'Button',
      ...((primary && typeButton.primary) ||
        (secondary && typeButton.secondary) ||
        (error && typeButton.error) ||
        []),
    ]

    return (
      <button ref={ref} className={customClassName.join(' ')} type={type} onClick={onClick}>
        {children}
      </button>
    )
  }
)

export default memo(Button)
