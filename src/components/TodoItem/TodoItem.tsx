import { FC, useState } from 'react'

import { ITodoItemProps } from './TodoItem.types'
import { Button, Popup } from 'shared'
import { dotsIcon } from 'icons'

import './TodoItem.css'

const TodoItem: FC<ITodoItemProps> = ({ todo }) => {
  const [showPopup, setShowPopup] = useState(false)

  const togglePopupHandler = () => setShowPopup(!showPopup)
  console.log('TodoItem')

  return (
    <div className='TodoItem'>
      <div className='TodoItem-text'>{todo.text}</div>
      <Popup
        isOpen={showPopup}
        onClickOutside={togglePopupHandler}
        content={<div>asdasdasdasdasdasd</div>}
      >
        <Button className='TodoItem-options' onClick={togglePopupHandler}>
          <img src={dotsIcon} alt='dots' />
        </Button>
      </Popup>
    </div>
  )
}

export default TodoItem
