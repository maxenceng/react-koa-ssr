// @flow

import Immutable from 'immutable'
import type { fromJS as ImmutType } from 'immutable'

import { SAY_OKAY } from '../actions/testAction'

/**
 * Example of an initial state
 */
const initialState = Immutable.fromJS({
  message: 'Test message',
})

/**
 * Modifies the state if SAY_OKAY is called
 * @param  {ImmutType} state
 * @param  {string} type
 * @param  {any} payload
 * @return {ImmutType}
 */
export default (
  state: ImmutType = initialState,
  action: { type: string, payload: any },
): ImmutType => {
  switch (action.type) {
    case SAY_OKAY:
      return state.set('message', action.payload)
    default:
      return state
  }
}
