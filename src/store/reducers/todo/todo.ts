import { ETodoActionType } from 'store/types'
import { TTodoAction } from 'store/actions'
import { TTodoState } from './todo.types'
import { ITodo } from 'models'

const initialState: TTodoState = { list: null }

const todoReducer = (state = initialState, action: TTodoAction): TTodoState => {
  switch (action.type) {
    case ETodoActionType.CREATE:
      return {
        ...state,
        list: [...(state.list || []), action.payload],
      }
    case ETodoActionType.UPDATE:
      return {
        ...state,
        list: (state.list || []).map((todo: ITodo) =>
          todo.id === action.payload.id ? action.payload : todo
        ),
      }
    case ETodoActionType.REMOVE:
      return {
        ...state,
        list: (state.list || []).filter((todo: ITodo) => todo.id !== action.payload.id),
      }
    case ETodoActionType.LOAD:
      return {
        ...state,
        list: [...action.payload],
      }
    default:
      return state
  }
}

export default todoReducer
