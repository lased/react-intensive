import { ChangeEvent, FC } from 'react'

import { ITextFieldProps } from './TextField.types'
import { TUseFormRules, useForm } from 'hooks'
import { Textarea } from 'shared'

import './TextField.css'

const values = { text: '' }
const rules: TUseFormRules = { text: ['required', { maxLength: 160 }] }

const TextField: FC<ITextFieldProps> = ({ value, onEnter }) => {
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
      onEnter(fields.text.trim())
    }
  }

  return (
    <Textarea
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
