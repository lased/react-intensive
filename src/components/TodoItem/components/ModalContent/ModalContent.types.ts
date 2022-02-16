import { ITodo } from 'models'

interface IModalContentProps {
  todo: ITodo
  onConfirm: (todo: ITodo) => void
  onClose: () => void
}

export type { IModalContentProps }
