type TValidatorValue = Record<string, string | number>
type TValidatorRule =
  | 'required'
  | 'firstCharInUpperĐˇase'
  | { startWith?: string; pattern?: RegExp; maxLength?: number }

export type { TValidatorValue, TValidatorRule }
