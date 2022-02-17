import { memo, KeyboardEvent, forwardRef } from 'react'

import { ITextareaProps } from './Textarea.types'

import './Textarea.css'

const Textarea = forwardRef<HTMLTextAreaElement, ITextareaProps>(
  ({ className, limit, value, name, error, label, onChange, onEnter }, ref) => {
    const id = `Textarea-${name}-id`
    const charsLeft = limit ? limit - value.length : 0
    const classes = ['Textarea', ...(className ? [className] : [])].join(' ')
    const limitText =
      charsLeft < 0
        ? `Превышен лимит символов в поле на ${Math.abs(charsLeft)}`
        : `Доступно символов для ввода: ${charsLeft}`
    const isDangerColor = { ...(charsLeft < 0 && { color: '#f59e0b' }) }
    const isDangerBorder = { ...(charsLeft < 0 && { border: '2px solid #f59e0b' }) }
    const isErrorBorder = { ...(error && { border: '2px solid #b91c1c' }) }

    const onKeyUpHandler = (event: KeyboardEvent<HTMLTextAreaElement>) => {
      if (event.code === 'Enter' && onEnter) {
        onEnter(event)
      }
    }

    return (
      <div className={classes}>
        {label && (
          <label className='Textarea-label' htmlFor={id}>
            {label}
          </label>
        )}
        <textarea
          {...(label && { id })}
          ref={ref}
          style={{ ...isErrorBorder, ...isDangerBorder }}
          className='Textarea-field'
          name={name}
          value={value}
          onChange={onChange}
          onKeyUp={onKeyUpHandler}
        />
        {limit && (
          <div className='Textarea-limit' style={{ ...isDangerColor }}>
            {limitText}
          </div>
        )}
        {error && charsLeft >= 0 && <div className='Textarea-error'>{error}</div>}
      </div>
    )
  }
)

export default memo(Textarea)
