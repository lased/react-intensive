import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { AppStoreState, EFilterStatus, TodosAction } from 'store'
import { Filter, TodoItem } from 'components'
import { ITodo } from 'models'

import './TodoList.css'

const TodoList = () => {
  const todos = useSelector((store: AppStoreState) => store.todos)
  const filter = useSelector((store: AppStoreState) => store.filter)
  const dispatch = useDispatch()

  const filterFn = (todo: ITodo) => {
    switch (filter.status) {
      case EFilterStatus.BOOKMARK:
        return todo.bookmark && !todo.completed
      case EFilterStatus.COMPLETED:
        return todo.completed
      case EFilterStatus.PROCESS:
        return !todo.completed
      default:
        return true
    }
  }
  const filtredTodos = todos.list?.filter(filterFn)

  useEffect(() => {
    dispatch(TodosAction.loadAsync())
  }, [])

  return (
    <div className='Todo'>
      {todos.list && !!todos.list.length && <Filter />}
      {filtredTodos && !filtredTodos.length && <strong>Список задач пуст</strong>}
      {!filtredTodos && <strong>Загрузка...</strong>}
      <div className='TodoList'>
        {filtredTodos && filtredTodos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
      </div>
    </div>
  )
}

export default TodoList
