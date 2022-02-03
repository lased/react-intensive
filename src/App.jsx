import { useEffect, useRef, useState } from 'react'
import { Route, Switch } from 'react-router-dom'

import { Header } from './components'
import { AppBlock } from './blocks'
import { ThemeContext } from './context'
import { About, Home, Product } from './pages'
import { ContainerBlock } from './shared'

const App = () => {
  const prevThemeRef = useRef()
  const [theme, setTheme] = useState('dark')
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  useEffect(() => {
    document.body.classList.remove(prevThemeRef.current)
    document.body.classList.add(theme)
    prevThemeRef.current = theme
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Header />
      <AppBlock>
        <ContainerBlock>
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/about' component={About} />
            <Route path='/product/:id' component={Product} />
          </Switch>
        </ContainerBlock>
      </AppBlock>
    </ThemeContext.Provider>
  )
}

export default App
