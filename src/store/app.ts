import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

import { todosReducer } from './reducers'

const appStore = createStore(
  combineReducers({
    todos: todosReducer,
  }),
  compose(applyMiddleware(thunk), (window as any)?.__REDUX_DEVTOOLS_EXTENSION__())
)

export type AppStoreDispatch = typeof appStore.dispatch
export type AppStoreState = ReturnType<typeof appStore.getState>
export default appStore
