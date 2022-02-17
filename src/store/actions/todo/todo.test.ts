import { ITodo } from 'models'
import { TodoService } from 'services'
import { ETodoActionType } from 'store'
import {
  create,
  update,
  load,
  remove,
  createAsync,
  updateAsync,
  loadAsync,
  removeAsync,
} from './todo'

jest.mock('services/Todo')

const mockTodoService = TodoService as jest.Mocked<typeof TodoService>
const mockDispatch = jest.fn()

const todo: ITodo = Object.freeze({
  id: 1,
  text: 'test',
  completed: true,
  bookmark: false,
  createdAt: new Date().toISOString(),
})

describe('sync action', () => {
  it('create action', () => {
    const createAction = create(todo)

    expect(createAction).toEqual({ type: ETodoActionType.CREATE, payload: todo })
  })
  it('update action', () => {
    const newTodo: ITodo = { ...todo, text: 'text', bookmark: true }
    const updateAction = update(newTodo)

    expect(updateAction).toEqual({ type: ETodoActionType.UPDATE, payload: newTodo })
  })
  it('remove action', () => {
    const removeAction = remove(todo)

    expect(removeAction).toEqual({ type: ETodoActionType.REMOVE, payload: todo })
  })
  it('load action', () => {
    const newTodo: ITodo = { ...todo, text: 'text', bookmark: true, id: 2 }
    const loadAction = load([todo, newTodo])

    expect(loadAction).toEqual({ type: ETodoActionType.LOAD, payload: [todo, newTodo] })
  })
})
describe('async action', () => {
  it('create action', async () => {
    mockTodoService.create.mockResolvedValueOnce(todo)
    await createAsync(todo)(mockDispatch)

    expect(mockDispatch).toBeCalled()
    expect(mockDispatch).toBeCalledWith({ type: ETodoActionType.CREATE, payload: todo })
  })
  it('update action', async () => {
    const newTodo: ITodo = { ...todo, text: 'text', bookmark: true }

    mockTodoService.update.mockResolvedValueOnce(newTodo)
    await updateAsync(newTodo)(mockDispatch)

    expect(mockDispatch).toBeCalled()
    expect(mockDispatch).toBeCalledWith({ type: ETodoActionType.UPDATE, payload: newTodo })
  })
  it('remove action', async () => {
    mockTodoService.remove.mockResolvedValueOnce(todo)
    await removeAsync(todo)(mockDispatch)

    expect(mockDispatch).toBeCalled()
    expect(mockDispatch).toBeCalledWith({ type: ETodoActionType.REMOVE, payload: todo })
  })
  it('load action', async () => {
    const newTodo: ITodo = { ...todo, text: 'text', bookmark: true, id: 2 }

    mockTodoService.findAll.mockResolvedValueOnce([todo, newTodo])
    await loadAsync()(mockDispatch)

    expect(mockDispatch).toBeCalled()
    expect(mockDispatch).toBeCalledWith({ type: ETodoActionType.LOAD, payload: [todo, newTodo] })
  })
})
