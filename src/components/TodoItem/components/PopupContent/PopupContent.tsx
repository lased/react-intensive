import { FC } from 'react'

import { IPopupContentProps } from './PopupContent.types'
import { Button } from 'shared'

import { pencilIcon, closeIcon, successIcon, starIcon } from 'icons'
import './PopupContent.css'

const PopupContent: FC<IPopupContentProps> = ({
  todo,
  onRemove,
  onEdit,
  onSuccess,
  onBookmark,
}) => {
  return (
    <div className='PopupContent'>
      <Button warning className='PopupContent-button' onClick={() => onBookmark(todo)}>
        <img src={starIcon} alt='star' /> {todo.bookmark ? 'Убрать из избранного' : 'В избранное'}
      </Button>
      <Button secondary className='PopupContent-button' onClick={() => onSuccess(todo)}>
        <img src={successIcon} alt='success' /> {todo.success ? 'Вернуть в работу' : 'Выполнено'}
      </Button>
      <Button primary className='PopupContent-button' onClick={() => onEdit(todo)}>
        <img src={pencilIcon} alt='pencil' /> Редактировать
      </Button>
      <Button error className='PopupContent-button' onClick={() => onRemove(todo)}>
        <img src={closeIcon} alt='close' /> Удалить
      </Button>
    </div>
  )
}

export default PopupContent
