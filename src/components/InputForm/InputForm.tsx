import { ChangeEvent, FormEvent } from 'react'

import { Button, Textarea } from '../../shared'
import { TUseFormRules } from '../../hooks/useForm.types'
import { useForm } from '../../hooks'

import './InputForm.css'
import { useDispatch } from 'react-redux'
import { createAsync } from '../../store/actions/todo'
import { ITodo } from '../../models'

const values = { text: '' }
const rules: TUseFormRules = { text: ['required', { maxLength: 160 }] }

const InputForm = () => {
  const { fields, errors, changeField, checkAllFields, clear } = useForm(values, rules)
  const dispatch = useDispatch()

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
      }

      clear()
      dispatch(createAsync(newTodo))
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
      <Button secondary>ОК</Button>
    </form>
  )
}

export default InputForm
