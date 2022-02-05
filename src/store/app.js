import { combineReducers, createStore } from 'redux'
import { basketReducer, themeReducer, authReducer } from './reducers'

const appStore = createStore(
    combineReducers({
        basket: basketReducer,
        theme: themeReducer,
        auth: authReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default appStore