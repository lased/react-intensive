import { EFilterActionType, EFilterStatus, TFilterAction, TFilterState } from 'store'

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
