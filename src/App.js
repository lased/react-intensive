import { useState } from 'react'

import { Form, Card, Header } from './components'
import { AppBlock, ThemeBlock } from './blocks'
import { ThemeContext } from './context'

const App = () => {
  const [data, setData] = useState(null)
  const [theme, setTheme] = useState('dark')
  const onSubmitHandler = (recivedData) => setData(recivedData)
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeBlock className={theme}>
        <Header />
        <AppBlock>
          {
            data
              ? <Card header='Анкета' data={data} />
              : <Form header='Создание анкеты' onSubmit={onSubmitHandler} />
          }
        </AppBlock>
      </ThemeBlock>
    </ThemeContext.Provider>
  )
}

export default App
