import { ITodo } from 'models'

interface IInputFormProps {
  onSubmit?: (todo: ITodo) => void
}

export type { IInputFormProps }
