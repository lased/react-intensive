import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { appStore } from './store'
import App from './App'

import './index.css'

ReactDOM.render(
  <BrowserRouter>
    <Provider store={appStore}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)
