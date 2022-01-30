import { useState } from 'react'

import { Form, Card } from './components'
import { AppBlock } from './blocks'

const App = () => {
  const [data, setData] = useState(null)
  const onSubmitHandler = (recivedData) => setData(recivedData)

  return (
    <AppBlock>
      {
        data
          ? <Card header='Анкета' data={data} />
          : <Form header='Создание анкеты' onSubmit={onSubmitHandler} />
      }
    </AppBlock>
  )
}

export default App
