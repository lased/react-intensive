import { Redirect, Route, Switch } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useRef, useEffect } from 'react'

import { About, Home, Product } from './pages'
import { ContainerBlock } from './shared'
import { BasketAction } from './store'
import { Header } from './components'
import { AppBlock } from './blocks'

const App = () => {
  const theme = useSelector((store) => store.theme)
  const prevTheme = useRef(theme)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(BasketAction.loadAsync())
  }, [])
  useEffect(() => {
    document.body.classList.remove(prevTheme.current)
    document.body.classList.add(theme)
    prevTheme.current = theme
  }, [theme])

  return (
    <>
      <Header />
      <AppBlock>
        <ContainerBlock>
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/about' component={About} />
            <Route path='/product/:id' component={Product} />
            <Route path='*'>
              <Redirect to='/' />
            </Route>
          </Switch>
        </ContainerBlock>
      </AppBlock>
    </>
  )
}

export default App
