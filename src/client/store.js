import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import testReducer from './reducers/testReducer'

export default createStore(combineReducers({ test: testReducer }), applyMiddleware(thunkMiddleware))
