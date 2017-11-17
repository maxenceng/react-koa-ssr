import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import Immutable from 'immutable'

import testReducer from './reducers/testReducer'

// eslint-disable-next-line no-underscore-dangle
const preloadedState = window.__PRELOADED_STATE__

export default createStore(
  combineReducers({ test: testReducer }),
  { test: Immutable.fromJS(preloadedState.test) },
  applyMiddleware(thunkMiddleware),
)
