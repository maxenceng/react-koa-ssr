// @flow

import React from 'react'

/**
 * @type {Object}
 */
type Props = {
  onclick: Function,
  text: string,
}

/**
 * @param  {Function} onclick
 * @param  {string} text
 */
export default ({ onclick, text }: Props) =>
  <button onClick={onclick}>{text}</button>
