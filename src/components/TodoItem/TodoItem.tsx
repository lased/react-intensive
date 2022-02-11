import { useDispatch } from 'react-redux'
import { FC, useState } from 'react'

import { removeAsync, updateAsync } from 'store/actions/todo'
import { ITodoItemProps } from './TodoItem.types'
import { PopupContent, TextField } from './components'
import { dotsIcon, starIcon } from 'icons'
import { Button, Popup } from 'shared'
import { ITodo } from 'models'

import './TodoItem.css'

const TodoItem: FC<ITodoItemProps> = ({ todo }) => {
  const [showPopup, setShowPopup] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const dispatch = useDispatch()
  const className = ['TodoItem', ...(todo.success ? ['TodoItem-success'] : [])].join(' ')

  const togglePopupHandler = () => setShowPopup(!showPopup)
  const toggleIsEditHandler = () => setIsEdit(!isEdit)
  const onBookmarkHandler = (todo: ITodo) => {
    dispatch(updateAsync({ ...todo, bookmark: !todo.bookmark }))
    togglePopupHandler()
  }
  const onSuccessHandler = (todo: ITodo) => {
    dispatch(updateAsync({ ...todo, success: !todo.success }))
    togglePopupHandler()
  }
  const onRemoveHandler = (todo: ITodo) => {
    dispatch(removeAsync(todo))
    togglePopupHandler()
  }
  const onEditHandler = () => {
    togglePopupHandler()
    toggleIsEditHandler()
  }
  const updateTodo = (value: string) => {
    dispatch(updateAsync({ ...todo, text: value }))
    toggleIsEditHandler()
  }

  return (
    <div className={className}>
      {isEdit ? (
        <TextField value={todo.text} onEnter={updateTodo} />
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
            onRemove={onRemoveHandler}
            onBookmark={onBookmarkHandler}
            onEdit={onEditHandler}
            onSuccess={onSuccessHandler}
          />
        }
      >
        <Button className='TodoItem-options' onClick={togglePopupHandler}>
          <img src={dotsIcon} alt='dots' />
        </Button>
      </Popup>
    </div>
  )
}

export default TodoItem
