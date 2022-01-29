import { useState } from 'react'

import { Form, Card } from './components'

import './App.css'

const App = () => {
  const [data, setData] = useState(null)
  const onSubmitHandler = (recivedData) => setData(recivedData)

  return (
    <div className="App">
      {
        data
          ? <Card header='Анкета' data={data} />
          : <Form header='Создание анкеты' onSubmit={onSubmitHandler} />
      }
    </div>
  )
}

export default App
