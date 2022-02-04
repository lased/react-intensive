import { useCallback, useState } from 'react'

import { Validator } from '../shared'

const useForm = (values, rules) => {
    const [fields, setFields] = useState(values)
    const [errors, setErrors] = useState({})
    let isValid = true

    const setFieldError = (field, value, fieldRules) => {
        const validator = new Validator()
        const fieldIsValid = validator.validate(value.trim(), fieldRules)

        isValid &&= fieldIsValid
        setErrors((prevErrors) => ({
            ...prevErrors, [field]: validator.getErrorMessage()
        }))
    }
    const clear = () => {
        setFields(values)
        setErrors({})
    }
    const onChange = useCallback((event) => {
        const { name: field, value } = event.target

        setFieldError(field, value, rules[field])
        setFields((prevFields) => ({ ...prevFields, [field]: value }))
    }, [])
    const checkAllFields = () => {
        Object.keys(rules).forEach((field) => setFieldError(field, fields[field], rules[field]))

        return isValid
    }

    return {
        fields,
        errors,
        onChange,
        checkAllFields,
        clear
    }
}

export default useForm