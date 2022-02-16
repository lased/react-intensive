import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

import { filterReducer, todoReducer } from './reducers'

const appStore = createStore(
  combineReducers({
    todos: todoReducer,
    filter: filterReducer,
  }),
  compose(applyMiddleware(thunk), (window as any)?.__REDUX_DEVTOOLS_EXTENSION__())
)

export type AppStoreState = ReturnType<typeof appStore.getState>
export { appStore }
