import { TValidatorRule } from '../shared/classes/Validator.types'

type TUseFormRules = { [key: string]: TValidatorRule[] }
type TUseFormValues = { [key: string]: string }

export type { TUseFormRules, TUseFormValues }
