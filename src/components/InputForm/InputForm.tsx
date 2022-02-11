import { ChangeEvent, FormEvent } from 'react'
import { useDispatch } from 'react-redux'

import { TUseFormRules, useForm } from 'hooks'
import { Button, Textarea } from 'shared'
import { TodosAction } from 'store'
import { createIcon } from 'icons'
import { ITodo } from 'models'

import './InputForm.css'

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
        bookmark: false,
        success: false,
      }

      clear()
      dispatch(TodosAction.createAsync(newTodo))
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
