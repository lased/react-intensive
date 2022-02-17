import { EFilterActionType, EFilterStatus } from 'store'
import { toggle } from './filter'

it('toggle filter', () => {
  const action = toggle(EFilterStatus.ALL)

  expect(action).toEqual({ type: EFilterActionType.TOGGLE, payload: EFilterStatus.ALL })
})
