import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { AppStoreState } from '../../store/app'
import { loadAsync } from '../../store/actions/todo'
import { TodoItem } from '..'

import './TodoList.css'

const TodoList = () => {
  const todos = useSelector((store: AppStoreState) => store.todos)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadAsync())
  }, [])

  return (
    <div className='TodoList'>
      {todos.list && !todos.list.length && <strong>Список задач пуст</strong>}
      {todos.list ? (
        todos.list.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      ) : (
        <strong>Загрузка...</strong>
      )}
    </div>
  )
}

export default TodoList
