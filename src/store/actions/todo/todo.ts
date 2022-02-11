import { Dispatch } from 'redux'

import { TodoService } from 'services'
import { ITodo } from 'models'
import {
  ETodoActionType,
  TTodoActionCreate,
  TTodoActionLoad,
  TTodoActionRemove,
  TTodoActionUpdate,
} from 'store'

const create = (todo: ITodo): TTodoActionCreate => ({
  type: ETodoActionType.CREATE,
  payload: todo,
})
const update = (todo: ITodo): TTodoActionUpdate => ({
  type: ETodoActionType.UPDATE,
  payload: todo,
})
const load = (todos: ITodo[]): TTodoActionLoad => ({
  type: ETodoActionType.LOAD,
  payload: todos,
})
const remove = (todo: ITodo): TTodoActionRemove => ({
  type: ETodoActionType.REMOVE,
  payload: todo,
})

const createAsync = (todo: ITodo) => async (dispatch: Dispatch) => {
  const createdTodo = await TodoService.create(todo)

  createdTodo && dispatch(create(createdTodo))
}
const updateAsync = (todo: ITodo) => async (dispatch: Dispatch) => {
  const updatedTodo = await TodoService.update(todo)

  updatedTodo && dispatch(update(updatedTodo))
}
const loadAsync = () => async (dispatch: Dispatch) => {
  const todos = await TodoService.findAll()

  todos && dispatch(load(todos))
}
const removeAsync = (todo: ITodo) => async (dispatch: Dispatch) => {
  const removedTodo = await TodoService.remove(todo)

  removedTodo && dispatch(remove(removedTodo))
}

export { create, update, load, remove, createAsync, updateAsync, loadAsync, removeAsync }
