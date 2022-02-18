import { EFilterActionType, EFilterStatus } from 'store/types'
import { TFilterAction } from 'store/actions'
import { TFilterState } from './filter.types'

const initialState: TFilterState = { status: EFilterStatus.ALL }

const filterReducer = (state = initialState, action: TFilterAction): TFilterState => {
  switch (action.type) {
    case EFilterActionType.TOGGLE:
      return {
        ...state,
        status: action.payload,
      }
    default:
      return state
  }
}

export default filterReducer
