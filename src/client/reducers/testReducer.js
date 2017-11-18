// @flow

import Immutable from 'immutable'
import type { fromJS as ImmutType } from 'immutable'

import { SAY_OKAY } from '../actions/testAction'

const initialState = Immutable.fromJS({
  message: 'Test message',
})

export default (state: ImmutType = initialState, action: { type: string, payload: any }) => {
  switch (action.type) {
    case SAY_OKAY:
      return state.set('message', action.payload)
    default:
      return state
  }
}
