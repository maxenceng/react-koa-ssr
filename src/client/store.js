// @flow

import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import immutable from 'immutable'

import testReducer from './reducers/testReducer'

//eslint-disable-next-line no-underscore-dangle
const preloadedState = window.__PRELOADED_STATE__

export default createStore(
  combineReducers({ test: testReducer }),
  { test: immutable.fromJS(preloadedState.test) },
  applyMiddleware(thunkMiddleware, logger),
)
