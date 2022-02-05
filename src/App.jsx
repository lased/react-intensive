import { Redirect, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import { About, Home, Product } from './pages'
import { ContainerBlock } from './shared'
import { Header } from './components'
import { AppBlock } from './blocks'
import { appStore } from './store'

const App = () => (
  <Provider store={appStore}>
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
  </Provider>
)

export default App
