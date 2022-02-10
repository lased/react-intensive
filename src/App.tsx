import { InputForm, TodoList } from './components'

import './App.css'

const App = () => {
  return (
    <div className='App'>
      <div className='Container'>
        <InputForm />
        <TodoList />
      </div>
    </div>
  )
}

export default App
