import { Component } from 'react'

import { Input, Textarea, Button } from './components'
import Validator from './Validator'

import './Form.css'

class Form extends Component {
    constructor(props) {
        super(props)
        this.defaultFields = {
            name: '',
            surname: '',
            date: '',
            phone: '',
            site: '',
            aboutMe: '',
            stack: '',
            description: ''
        }
        this.state = {
            fields: { ...this.defaultFields },
            errors: {}
        }
        this.rules = {
            name: ['required', 'firstCharInUpperСase'],
            surname: ['required', 'firstCharInUpperСase'],
            date: ['required', { pattern: /^\d{4}-\d{2}-\d{2}$/ }],
            phone: ['required', { pattern: /^\d-\d{4}-\d{2}-\d{2}$/ }],
            site: [
                'required',
                { startWith: 'https://' },
                { pattern: /^https:\/\/(\w+\.)+\w+$/ }
            ],
            aboutMe: ['required', { maxLength: 600 }],
            stack: ['required', { maxLength: 600 }],
            description: ['required', { maxLength: 600 }]
        }
    }

    clearForm = () => {
        this.setState({ fields: { ...this.defaultFields }, errors: {} })
    }

    onChangeHandler = (event) => {
        const { name: field, value } = event.target
        const validator = new Validator()

        validator.validate(value.trim(), this.rules[field])
        this.setState((state) => ({
            fields: { ...state.fields, [field]: value },
            errors: { ...state.errors, [field]: validator.getErrorMessage() }
        }))
    }

    onBlurHandler = (event) => {
        const { name: field, value } = event.target

        this.setState((state) => ({
            fields: { ...state.fields, [field]: value.trim() }
        }))
    }

    onSubmitHandler = (event) => {
        event.preventDefault()

        let formValid = true

        Object.keys(this.rules).forEach((field) => {
            const validator = new Validator()
            const valid = validator.validate(this.state.fields[field], this.rules[field])

            if (!valid) {
                this.setState((state) => ({
                    errors: { ...state.errors, [field]: validator.getErrorMessage() }
                }))
            }

            formValid &&= valid
        })

        if (formValid) {
            const { fields } = this.state

            this.clearForm()
            this.props.onSubmit(fields)
        }
    }

    render() {
        const { errors, fields } = this.state
        console.log('Render ', performance.now());
        return (
            <form className='Form' onSubmit={this.onSubmitHandler} noValidate>
                <header className="Form-header">{this.props.header}</header>
                <Input
                    name='name'
                    label='Имя'
                    value={fields.name}
                    onChange={this.onChangeHandler}
                    onBlur={this.onBlurHandler}
                    error={errors.name}
                />
                <Input
                    name='surname'
                    label='Фамилия'
                    value={fields.surname}
                    onChange={this.onChangeHandler}
                    onBlur={this.onBlurHandler}
                    error={errors.surname}
                />
                <Input
                    name='date'
                    type='date'
                    label='Дата рождения'
                    value={fields.date}
                    onChange={this.onChangeHandler}
                    onBlur={this.onBlurHandler}
                    error={errors.date}
                />
                <Input
                    name='phone'
                    label='Телефон'
                    placeholder='7-7777-77-77'
                    value={fields.phone}
                    onChange={this.onChangeHandler}
                    onBlur={this.onBlurHandler}
                    error={errors.phone}
                />
                <Input
                    name='site'
                    label='Сайт'
                    placeholder='https://ya.ru'
                    value={fields.site}
                    onChange={this.onChangeHandler}
                    onBlur={this.onBlurHandler}
                    error={errors.site}
                />
                <Textarea
                    name='aboutMe'
                    label='О себе'
                    limit={600}
                    value={fields.aboutMe}
                    onChange={this.onChangeHandler}
                    onBlur={this.onBlurHandler}
                    error={errors.aboutMe}
                />
                <Textarea
                    name='stack'
                    label='Стек технологий'
                    limit={600}
                    value={fields.stack}
                    onChange={this.onChangeHandler}
                    onBlur={this.onBlurHandler}
                    error={errors.stack}
                />
                <Textarea
                    name='description'
                    label='Описание последнего проекта'
                    limit={600}
                    value={fields.description}
                    onChange={this.onChangeHandler}
                    onBlur={this.onBlurHandler}
                    error={errors.description}
                />
                <div className='Buttons'>
                    <Button design='cancel' type='button' onClick={this.clearForm}>Отмена</Button>
                    <Button design='submit'>Сохранить</Button>
                </div>
            </form>
        )
    }
}

export default Form