import { FC, memo } from 'react'

import { IButtonProps } from './Button.types'

import './Button.css'

const typeButton = {
  primary: ['Button-primary'],
  secondary: ['Button-secondary'],
  error: ['Button-error'],
}

const Button: FC<Partial<IButtonProps>> = ({
  className,
  secondary,
  children,
  primary,
  error,
  type,
  onClick,
}) => {
  const customClassName = [
    className,
    'Button',
    ...((primary && typeButton.primary) ||
      (secondary && typeButton.secondary) ||
      (error && typeButton.error) ||
      []),
  ]

  return (
    <button className={customClassName.join(' ')} type={type} onClick={onClick}>
      {children}
    </button>
  )
}

export default memo(Button)
