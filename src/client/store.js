// @flow

import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import immutable from 'immutable'
import logger from 'redux-logger'

import { IS_PROD } from '../utils/config'
import reducers from './reducers/'

//eslint-disable-next-line no-underscore-dangle
const preloadedState = window.__PRELOADED_STATE__

/**
 * Creates our store
 */
export default createStore(
  reducers,
  { test: immutable.fromJS(preloadedState.test) },
  IS_PROD ? applyMiddleware(thunkMiddleware) : applyMiddleware(thunkMiddleware, logger),
)
