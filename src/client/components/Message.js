// @flow

import React from 'react'

/**
 * @type {Object}
 */
type Props = {
  message: string,
}

/**
 * @param  {string} message
 */
export default ({ message }: Props) =>
  <p>{message}</p>
