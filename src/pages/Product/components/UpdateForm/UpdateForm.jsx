import { Input, Textarea, Button } from '../../../../shared'
import { useForm } from '../../../../hooks'
import { FormBlock } from './blocks'
import { useCallback } from 'react'

const values = { title: '', price: '', inStock: '', description: '' }
const rules = {
  title: ['required', { maxLength: 120 }],
  description: ['required', { maxLength: 600 }],
  price: ['required'],
  inStock: ['required'],
}

const UpdateForm = ({ data, onSubmit }) => {
  const { fields, errors, changeField, checkAllFields } = useForm({ ...values, ...data }, rules)

  const onChangeHandler = useCallback((event) => {
    const { name, value, type } = event.target

    changeField(name, value && type === 'number' ? Math.abs(value) : value)
  }, [])
  const onSubmitHandler = (event) => {
    event.preventDefault()

    const formIsValid = checkAllFields()

    if (formIsValid) {
      onSubmit(fields)
    }
  }

  return (
    <FormBlock onSubmit={onSubmitHandler}>
      <Input
        name='title'
        label='Заголовок'
        value={fields.title}
        onChange={onChangeHandler}
        error={errors.title}
      />
      <Input
        name='price'
        label='Цена'
        type='number'
        value={fields.price}
        onChange={onChangeHandler}
        error={errors.price}
      />
      <Input
        name='inStock'
        label='В наличии'
        type='number'
        value={fields.inStock}
        onChange={onChangeHandler}
        error={errors.inStock}
      />
      <Textarea
        name='description'
        label='Описание'
        limit={600}
        value={fields.description}
        onChange={onChangeHandler}
        error={errors.description}
      />
      <Button secondary>Сохранить</Button>
    </FormBlock>
  )
}

export default UpdateForm
