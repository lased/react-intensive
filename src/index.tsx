import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'

import { appStore } from 'store/app'
import App from './App'

import './index.css'

ReactDOM.render(
  <Provider store={appStore}>
    <App />
  </Provider>,
  document.getElementById('root')
)
