import { useState } from 'react'

import { Button, ErrorBlock, Input } from '../../../../../../shared'
import { LocalStorage, User } from '../../../../../../services'
import { USER_KEY } from '../../../../../../config'
import { useForm } from '../../../../../../hooks'
import { FormBlock } from './blocks'

const values = { username: '', password: '' }
const rules = { username: ['required'], password: ['required'] }

const AuthForm = ({ onSubmit }) => {
  const { fields, errors, onChange, checkAllFields } = useForm(values, rules)
  const [formError, setFormError] = useState(false)
  const onSubmitHandler = (event) => {
    event.preventDefault()

    const isValid = checkAllFields()

    if (isValid) {
      User.login(fields.username, fields.password).subscribe((user) => {
        if (user) {
          onSubmit(user)
        } else {
          setFormError(true)
        }
      })
    }
  }

  return (
    <FormBlock onSubmit={onSubmitHandler}>
      {formError && <ErrorBlock>Неверный логин/пароль</ErrorBlock>}
      <Input
        name='username'
        label='Логин'
        value={fields.username}
        onChange={onChange}
        error={errors.username}
      />
      <Input
        name='password'
        label='Пароль'
        type='password'
        value={fields.password}
        onChange={onChange}
        error={errors.password}
      />
      <Button secondary>Войти</Button>
    </FormBlock>
  )
}

export default AuthForm
