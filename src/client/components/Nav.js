// @flow

import React from 'react'
import { NavLink } from 'react-router-dom'
import { ROUTES } from '../../utils/routes'

/**
 * Nav component
 */
export default () =>
  (
    <nav>
      <ul>
        {Array.from(ROUTES).map(([key, value]) =>
          <li key={key}><NavLink to={value.route}>{key}</NavLink></li>)}
      </ul>
    </nav>
  )
