import { useDispatch } from 'react-redux'
import { FC, useState } from 'react'

import { ModalContent, PopupContent, TextField } from './components'
import { ITodoItemProps } from './TodoItem.types'
import { Button, Modal, Popup } from 'shared'
import { dotsIcon, starIcon } from 'icons'
import { TodosAction } from 'store'

import './TodoItem.css'

const TodoItem: FC<ITodoItemProps> = ({ todo }) => {
  const [showPopup, setShowPopup] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [isOpenConfirm, setIsOpenConfirm] = useState(false)
  const dispatch = useDispatch()
  const className = ['TodoItem', ...(todo.completed ? ['TodoItem-success'] : [])].join(' ')

  const togglePopupHandler = () => setShowPopup(!showPopup)
  const toggleIsEditHandler = () => setIsEdit(!isEdit)
  const toggleShowConfirmHandler = () => setIsOpenConfirm(!isOpenConfirm)
  const onBookmarkHandler = () => {
    dispatch(TodosAction.updateAsync({ ...todo, bookmark: !todo.bookmark }))
    togglePopupHandler()
  }
  const onSuccessHandler = () => {
    dispatch(TodosAction.updateAsync({ ...todo, completed: !todo.completed }))
    togglePopupHandler()
  }
  const onEditHandler = (value: string) => {
    dispatch(TodosAction.updateAsync({ ...todo, text: value }))
    toggleIsEditHandler()
  }
  const onRemoveHandler = () => {
    dispatch(TodosAction.removeAsync(todo))
    togglePopupHandler()
  }
  const updateTodo = () => {
    togglePopupHandler()
    toggleIsEditHandler()
  }
  const showConfirmModal = () => {
    toggleShowConfirmHandler()
  }

  return (
    <div className={className}>
      {isEdit ? (
        <TextField value={todo.text} onEnter={onEditHandler} />
      ) : (
        <>
          {todo.bookmark && <img src={starIcon} alt='star' onClick={onBookmarkHandler} />}
          <div className='TodoItem-text'>{todo.text}</div>
        </>
      )}
      <Popup
        isOpen={showPopup}
        onClickOutside={togglePopupHandler}
        content={
          <PopupContent
            todo={todo}
            onRemove={showConfirmModal}
            onBookmark={onBookmarkHandler}
            onEdit={updateTodo}
            onSuccess={onSuccessHandler}
          />
        }
      >
        <Button className='TodoItem-options' onClick={togglePopupHandler}>
          <img src={dotsIcon} alt='dots' />
        </Button>
      </Popup>
      <Modal isOpen={isOpenConfirm} onClose={toggleShowConfirmHandler}>
        <ModalContent todo={todo} onConfirm={onRemoveHandler} onClose={toggleShowConfirmHandler} />
      </Modal>
    </div>
  )
}

export default TodoItem
