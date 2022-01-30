import { useState } from 'react'

import { Form, Card, Header } from './components'
import { AppBlock } from './blocks'

const App = () => {
  const [data, setData] = useState(null)
  const onSubmitHandler = (recivedData) => setData(recivedData)

  return (
    <>
      <Header />
      <AppBlock>
        {
          data
            ? <Card header='Анкета' data={data} />
            : <Form header='Создание анкеты' onSubmit={onSubmitHandler} />
        }
      </AppBlock>
    </>
  )
}

export default App
