import { MouseEvent } from 'react'

import { ITodo } from 'models'

interface IPopupContentProps {
  todo: ITodo
  onBookmark: (todo: ITodo) => void
  onSuccess: (todo: ITodo) => void
  onRemove: (todo: ITodo) => void
  onEdit: (todo: ITodo) => void
}

export type { IPopupContentProps }
