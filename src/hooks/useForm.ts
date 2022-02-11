import { useState } from 'react'

import { TUseFormRules, TUseFormValues } from 'hooks'
import { Validator, TValidatorRule } from 'shared'

const useForm = (values: TUseFormValues, rules: TUseFormRules) => {
  const [fields, setFields] = useState(values)
  const [errors, setErrors] = useState<TUseFormValues>({})

  const checkField = (field: string, value: string, fieldRules: TValidatorRule[]) => {
    const validator = new Validator()
    const fieldIsValid = validator.validate(value, fieldRules)

    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: validator.getErrorMessage(),
    }))

    return fieldIsValid
  }
  const clear = () => {
    setFields(values)
    setErrors({})
  }
  const changeField = (field: string, value: string) => {
    checkField(field, value, rules[field])
    setFields((prevFields) => ({ ...prevFields, [field]: value }))
  }
  const checkAllFields = () => {
    let formIsValid = true

    Object.keys(rules).forEach((field) => {
      const fieldIsValid = checkField(field, fields[field], rules[field])

      formIsValid &&= fieldIsValid
    })

    return formIsValid
  }

  return {
    fields,
    errors,
    changeField,
    checkAllFields,
    clear,
  }
}

export default useForm
