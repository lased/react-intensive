import { EFilterActionType, EFilterStatus } from 'store'
import filterReducer from './filter'

it('toggle state', () => {
  const state = filterReducer(
    { status: EFilterStatus.BOOKMARK },
    { type: EFilterActionType.TOGGLE, payload: EFilterStatus.ALL }
  )

  expect(state).toEqual({ status: EFilterStatus.ALL })
})
