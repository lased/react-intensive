import { ChangeEvent, FC, FormEvent } from 'react'

import { IInputFormProps } from './InputForm.type'
import { TUseFormRules, useForm } from 'hooks'
import { Button, Textarea } from 'shared'
import { createIcon } from 'icons'
import { ITodo } from 'models'

import './InputForm.css'

const values = { text: '' }
const rules: TUseFormRules = { text: ['required', { maxLength: 160 }] }

const InputForm: FC<IInputFormProps> = ({ onSubmit }) => {
  const { fields, errors, changeField, checkAllFields, clear } = useForm(values, rules)

  const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value, name } = event.target

    changeField(name, value)
  }
  const onSubmitHandler = (event: FormEvent) => {
    event.preventDefault()

    const formIsValid = checkAllFields()

    if (formIsValid) {
      const newTodo: ITodo = {
        text: fields.text,
        bookmark: false,
        completed: false,
        createdAt: new Date().toISOString(),
      }

      clear()
      onSubmit?.(newTodo)
    }
  }

  return (
    <form className='InputForm' onSubmit={onSubmitHandler}>
      <Textarea
        error={errors.text}
        limit={160}
        value={fields.text}
        name='text'
        onChange={onChangeHandler}
      />
      <Button secondary>
        <img src={createIcon} alt='OK' />
      </Button>
    </form>
  )
}

export default InputForm
