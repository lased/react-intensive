import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

import { basketReducer, themeReducer, authReducer } from './reducers'

const appStore = createStore(
    combineReducers({
        basket: basketReducer,
        theme: themeReducer,
        auth: authReducer
    }),
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

export default appStore