import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import { EFilterStatus, TodosAction } from 'store'
import { Filter, TodoItem } from 'components'
import { AppStoreState } from 'store/app'
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
  const filteredTodos = todos.list?.filter(filterFn)

  useEffect(() => {
    dispatch(TodosAction.loadAsync())
  }, [])

  return (
    <div className='Todo'>
      {todos.list && !!todos.list.length && <Filter />}
      {filteredTodos && !filteredTodos.length && <strong>Список задач пуст</strong>}
      {!filteredTodos && <strong>Загрузка...</strong>}
      <div className='TodoList'>
        {filteredTodos &&
          filteredTodos.map((todo: ITodo) => <TodoItem key={todo.id} todo={todo} />)}
      </div>
    </div>
  )
}

export default TodoList
