import { EFilterActionType, EFilterStatus } from 'store'

type TFilterActionToggle = {
  type: EFilterActionType.TOGGLE
  payload: EFilterStatus
}

type TFilterAction = TFilterActionToggle

export type { TFilterActionToggle, TFilterAction }
