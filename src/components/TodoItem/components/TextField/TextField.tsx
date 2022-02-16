import { ChangeEvent, FC, useEffect, useRef } from 'react'

import { ITextFieldProps } from './TextField.types'
import { TUseFormRules, useForm } from 'hooks'
import { Textarea } from 'shared'

import './TextField.css'

const values = { text: '' }
const rules: TUseFormRules = { text: ['required', { maxLength: 160 }] }

const TextField: FC<ITextFieldProps> = ({ value, onEnter }) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)
  const { fields, errors, changeField, checkAllFields } = useForm(
    { ...values, ...{ text: value } },
    rules
  )

  const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value, name } = event.target

    changeField(name, value)
  }
  const onEnterHandler = () => {
    if (checkAllFields()) {
      textareaRef.current?.blur()
      onEnter(fields.text.trim())
    }
  }

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus()
      textareaRef.current.selectionStart = textareaRef.current.value.length
    }
  }, [])

  return (
    <Textarea
      ref={textareaRef}
      className='TextField'
      error={errors.text}
      limit={160}
      value={fields.text}
      name='text'
      onChange={onChangeHandler}
      onEnter={onEnterHandler}
    />
  )
}

export default TextField
