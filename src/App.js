import { useEffect, useRef, useState } from 'react'

import { Form, Card, Header } from './components'
import { AppBlock } from './blocks'
import { ThemeContext } from './context'

const App = (props) => {
  const formRef = useRef()
  const prevThemeRef = useRef('dark')

  const [data, setData] = useState(null)
  const [theme, setTheme] = useState('dark')

  const onSubmitHandler = (recivedData) => setData(recivedData)
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')
  const onResetFormHandler = () => formRef.current.reset()

  useEffect(() => {
    document.body.classList.remove(prevThemeRef.current)
    document.body.classList.add(theme)
    prevThemeRef.current = theme
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Header
        {...(!data ? { showReset: true } : {})}
        onResetForm={onResetFormHandler}
      />
      <AppBlock>
        {
          data
            ? <Card header='Анкета' data={data} />
            : <Form
              ref={formRef}
              header='Создание анкеты'
              onSubmit={onSubmitHandler}
            />
        }
      </AppBlock>
    </ThemeContext.Provider>
  )
}

export default App
