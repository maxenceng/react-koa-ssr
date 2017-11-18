// @flow

import React from 'react'

type Props = {
  onclick: Function,
  text: string,
}

export default ({ onclick, text }: Props) =>
  <button onClick={onclick}>{text}</button>
