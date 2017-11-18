// @flow

import { combineReducers } from 'redux'

import testReducer from './testReducer'

/**
 * Combines all the reducers
 */
export default combineReducers({
  test: testReducer,
})
