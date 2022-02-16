import { EFilterActionType, EFilterStatus, TFilterActionToggle } from 'store'

const toggle = (status: EFilterStatus): TFilterActionToggle => ({
  type: EFilterActionType.TOGGLE,
  payload: status,
})

export { toggle }
