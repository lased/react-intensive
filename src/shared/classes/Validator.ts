import { TValidatorRule } from './Validator.types'

class Validator {
  message = ''

  validate(value: string, rules: TValidatorRule[]) {
    for (const rule of rules) {
      if (rule === 'required' && value === '') {
        this.message = 'Поле пустое. Заполните пожалуйста'
      } else if (
        rule === 'firstCharInUpperСase' &&
        typeof value === 'string' &&
        value.length &&
        value[0] !== value[0].toUpperCase()
      ) {
        this.message = 'Первая буква не является заглавной'
      } else if (typeof rule === 'object') {
        if (rule.startWith && !RegExp(`^${rule.startWith}`).test(value)) {
          this.message = `Поле должно начинаться с ${rule.startWith}`
        } else if (rule.pattern && rule.pattern instanceof RegExp && !rule.pattern.test(value)) {
          this.message = 'Поле содержит некорректные данные'
        } else if (rule.maxLength && value.length > rule.maxLength) {
          this.message = 'Превышен лимит символов в поле'
        }
      }

      if (this.message) {
        break
      }
    }

    return !this.message
  }

  getErrorMessage() {
    return this.message
  }
}

export default Validator
