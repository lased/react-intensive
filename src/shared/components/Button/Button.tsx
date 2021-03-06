import { forwardRef, memo } from 'react'

import { IButtonProps } from './Button.types'

import './Button.css'

const typeButton = {
  primary: ['Button-primary'],
  secondary: ['Button-secondary'],
  error: ['Button-error'],
  warning: ['Button-warning'],
}

const Button = forwardRef<HTMLButtonElement, Partial<IButtonProps>>(
  ({ className, secondary, children, warning, primary, error, type, onClick }, ref) => {
    const customClassName = [
      ...(className ? [className] : []),
      'Button',
      ...((primary && typeButton.primary) ||
        (secondary && typeButton.secondary) ||
        (error && typeButton.error) ||
        (warning && typeButton.warning) ||
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
