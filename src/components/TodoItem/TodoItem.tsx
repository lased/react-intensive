import { useDispatch } from 'react-redux'
import { FC, useState } from 'react'

import { removeAsync, updateAsync } from 'store/actions/todo'
import { ModalContent, PopupContent, TextField } from './components'
import { ITodoItemProps } from './TodoItem.types'
import { Button, Modal, Popup } from 'shared'
import { dotsIcon, starIcon } from 'icons'
import { ITodo } from 'models'

import './TodoItem.css'

const TodoItem: FC<ITodoItemProps> = ({ todo }) => {
  const [showPopup, setShowPopup] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [isOpenConfirm, setIsOpenConfirm] = useState(false)
  const dispatch = useDispatch()
  const className = ['TodoItem', ...(todo.success ? ['TodoItem-success'] : [])].join(' ')

  const togglePopupHandler = () => setShowPopup(!showPopup)
  const toggleIsEditHandler = () => setIsEdit(!isEdit)
  const toggleShowConfirmHandler = () => setIsOpenConfirm(!isOpenConfirm)
  const onBookmarkHandler = (todo: ITodo) => {
    dispatch(updateAsync({ ...todo, bookmark: !todo.bookmark }))
    togglePopupHandler()
  }
  const onSuccessHandler = (todo: ITodo) => {
    dispatch(updateAsync({ ...todo, success: !todo.success }))
    togglePopupHandler()
  }
  const onEditHandler = (value: string) => {
    dispatch(updateAsync({ ...todo, text: value }))
    toggleIsEditHandler()
  }
  const onRemoveHandler = (todo: ITodo) => {
    dispatch(removeAsync(todo))
    togglePopupHandler()
  }
  const showConfirmModal = () => {
    toggleShowConfirmHandler()
  }
  const updateTodo = () => {
    togglePopupHandler()
    toggleIsEditHandler()
  }

  return (
    <div className={className}>
      {isEdit ? (
        <TextField value={todo.text} onEnter={onEditHandler} />
      ) : (
        <>
          {todo.bookmark && <img src={starIcon} alt='star' />}
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
