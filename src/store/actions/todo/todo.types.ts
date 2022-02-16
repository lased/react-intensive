import { ITodo } from 'models'
import { ETodoActionType } from 'store'

type TTodoActionCreate = {
  type: ETodoActionType.CREATE
  payload: ITodo
}
type TTodoActionRemove = {
  type: ETodoActionType.REMOVE
  payload: ITodo
}
type TTodoActionUpdate = {
  type: ETodoActionType.UPDATE
  payload: ITodo
}
type TTodoActionLoad = {
  type: ETodoActionType.LOAD
  payload: ITodo[]
}

type TTodoAction = TTodoActionCreate | TTodoActionRemove | TTodoActionUpdate | TTodoActionLoad

export type {
  TTodoAction,
  TTodoActionCreate,
  TTodoActionRemove,
  TTodoActionUpdate,
  TTodoActionLoad,
}
