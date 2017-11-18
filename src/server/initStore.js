// @flow

import Immutable from 'immutable'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import testReducer from '../client/reducers/testReducer'

export default (plainState: ?Object) => {
  const preloadedState = plainState ? {} : undefined

  if (plainState && plainState.test) {
    // flow-disable-next-line
    preloadedState.test = testReducer(undefined, {}).merge(Immutable.fromJS(plainState.test))
  }
  return createStore(
    combineReducers({ test: testReducer }),
    preloadedState,
    applyMiddleware(thunkMiddleware),
  )
}
