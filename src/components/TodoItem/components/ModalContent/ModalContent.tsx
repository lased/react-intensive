import { FC } from 'react'

import { IModalContentProps } from './ModalContent.types'
import { Button, Helper } from 'shared'

import './ModalContent.css'

const ModalContent: FC<IModalContentProps> = ({ todo, onConfirm, onClose }) => {
  return (
    <div className='ModalContent'>
      <h2>Вы действительно хотите удалить задачу?</h2>
      <div>{todo.text}</div>
      <div className='ModalContent-date'>{Helper.getDate(todo.createdAt)}</div>
      <div className='ModalContent-control'>
        <Button error onClick={onClose}>
          Отмена
        </Button>
        <Button secondary onClick={() => onConfirm(todo)}>
          ДА
        </Button>
      </div>
    </div>
  )
}

export default ModalContent
