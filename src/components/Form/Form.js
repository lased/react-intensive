import { useState } from 'react'

import { DEFAULT_VALUES, RULES } from './config'
import { Input, Textarea, Button } from '../'
import { ButtonsBlock, FormBlock, HeaderBlock } from './blocks'

import { Validator } from '../../shared'

const Form = (props) => {
    const [fields, setFields] = useState(DEFAULT_VALUES)
    const [errors, setErrors] = useState({})

    const clearForm = () => {
        setFields(DEFAULT_VALUES)
        setErrors({})
    }
    const onBlurHandler = (event) => {
        const { name: field, value } = event.target

        setFields({ ...fields, [field]: value.trim() })
    }
    const onChangeHandler = (event) => {
        const { name: field, value } = event.target
        const validator = new Validator()

        validator.validate(value.trim(), RULES[field])
        setFields({ ...fields, [field]: value })
        setErrors({ ...errors, [field]: validator.getErrorMessage() })
    }
    const onSubmitHandler = (event) => {
        event.preventDefault()

        let formValid = true

        Object.keys(RULES).forEach((field) => {
            const validator = new Validator()
            const valid = validator.validate(fields[field], RULES[field])

            if (!valid) {
                setErrors((currentErrors) => ({ ...currentErrors, [field]: validator.getErrorMessage() }))
            }

            formValid &&= valid
        })

        if (formValid) {
            clearForm()
            props.onSubmit(fields)
        }
    }

    return (
        <FormBlock onSubmit={onSubmitHandler} noValidate>
            <HeaderBlock>{props.header}</HeaderBlock>
            <Input
                name='name'
                label='Имя'
                value={fields.name}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
                error={errors.name}
            />
            <Input
                name='surname'
                label='Фамилия'
                value={fields.surname}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
                error={errors.surname}
            />
            <Input
                name='date'
                type='date'
                label='Дата рождения'
                value={fields.date}
                onChange={onChangeHandler}
                onBlur={(event) => {
                    onChangeHandler(event)
                    onBlurHandler(event)
                }}
                error={errors.date}
            />
            <Input
                name='phone'
                label='Телефон'
                placeholder='7-7777-77-77'
                value={fields.phone}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
                error={errors.phone}
            />
            <Input
                name='site'
                label='Сайт'
                placeholder='https://ya.ru'
                value={fields.site}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
                error={errors.site}
            />
            <Textarea
                name='aboutMe'
                label='О себе'
                limit={600}
                value={fields.aboutMe}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
                error={errors.aboutMe}
            />
            <Textarea
                name='stack'
                label='Стек технологий'
                limit={600}
                value={fields.stack}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
                error={errors.stack}
            />
            <Textarea
                name='description'
                label='Описание последнего проекта'
                limit={600}
                value={fields.description}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
                error={errors.description}
            />
            <ButtonsBlock>
                <Button error type='button' onClick={clearForm}>Отмена</Button>
                <Button primary>Сохранить</Button>
            </ButtonsBlock>
        </FormBlock>
    )
}

export default Form