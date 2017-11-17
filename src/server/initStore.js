import Immutable from 'immutable'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import testReducer from '../client/reducers/testReducer'

export default (plainState) => {
  const preloadedState = plainState ? {} : undefined

  if (plainState && plainState.test) {
    preloadedState.test = testReducer(undefined, {}).merge(Immutable.fromJS(plainState.test))
  }
  return createStore(
    combineReducers({ test: testReducer }),
    preloadedState,
    applyMiddleware(thunkMiddleware),
  )
}
