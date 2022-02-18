import { useDispatch } from 'react-redux'

import { InputForm, TodoList } from './components'
import { TodosAction } from 'store'
import { ITodo } from 'models'

import './App.css'

const App = () => {
  const dispatch = useDispatch()

  const onSubmitHandler = (todo: ITodo) => {
    dispatch(TodosAction.createAsync(todo))
  }

  return (
    <div className='App'>
      <div className='Container'>
        <InputForm onSubmit={onSubmitHandler} />
        <TodoList />
      </div>
    </div>
  )
}

export default App
