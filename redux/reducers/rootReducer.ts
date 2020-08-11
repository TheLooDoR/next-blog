import { AnyAction, combineReducers } from 'redux'
import { postReducer } from './postReducer'
import { HYDRATE } from 'next-redux-wrapper'

const combinedReducer = combineReducers({ postStore: postReducer })

export type RootStore = ReturnType<typeof combinedReducer>

const rootReducer = (state: RootStore, action: AnyAction): RootStore => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    }
  } else {
    return combinedReducer(state, action)
  }
}

export default rootReducer
