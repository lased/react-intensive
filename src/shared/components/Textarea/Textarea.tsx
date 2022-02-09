import { FC, memo } from 'react'

import { ITextareaProps } from './Textarea.types'

import './Textarea.css'

const Textarea: FC<ITextareaProps> = ({ limit, value, name, error, label, onChange }) => {
  const id = `Textarea-${name}-id`
  const charsLeft = limit ? limit - value.length : 0
  const limitText =
    charsLeft < 0
      ? `Превышен лимит символов в поле на ${Math.abs(charsLeft)}`
      : `Доступно символов для ввода: ${charsLeft}`
  const isDangerColor = { ...(charsLeft < 0 && { color: '#f59e0b' }) }
  const isDangerBorder = { ...(charsLeft < 0 && { border: '2px solid #f59e0b' }) }
  const isErrorBorder = { ...(error && { border: '2px solid #b91c1c' }) }

  return (
    <div className='Textarea'>
      {label && (
        <label className='Textarea-label' htmlFor={id}>
          {label}
        </label>
      )}
      <textarea
        style={{ ...isErrorBorder, ...isDangerBorder }}
        className='Textarea-field'
        name={name}
        id={id}
        value={value}
        onChange={onChange}
      ></textarea>
      {limit && (
        <div className='Textarea-limit' style={{ ...isDangerColor }}>
          {limitText}
        </div>
      )}
      {error && charsLeft >= 0 && <div className='Textarea-error'>{error}</div>}
    </div>
  )
}

export default memo(Textarea)
