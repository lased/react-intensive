import { useState } from 'react'

import { Validator } from '../shared'

const useForm = (values, rules) => {
    const [fields, setFields] = useState(values)
    const [errors, setErrors] = useState({})

    const checkField = (field, value, fieldRules) => {
        const validator = new Validator()
        const fieldIsValid = validator.validate(value, fieldRules)

        setErrors((prevErrors) => ({
            ...prevErrors, [field]: validator.getErrorMessage()
        }))

        return fieldIsValid
    }
    const clear = () => {
        setFields(values)
        setErrors({})
    }
    const changeField = (field, value) => {
        checkField(field, value, rules[field])
        setFields((prevFields) => ({
            ...prevFields,
            [field]: (typeof values[field] === 'number' ? +value : value)
        }))
    }
    const checkAllFields = () => {
        let formIsValid = true

        Object.keys(rules).forEach((field) => {
            formIsValid &&= checkField(field, fields[field], rules[field])
        })

        return formIsValid
    }

    return {
        fields,
        errors,
        changeField,
        checkAllFields,
        clear
    }
}

export default useForm