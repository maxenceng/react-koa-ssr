// @flow

import React from 'react'
import { NavLink } from 'react-router-dom'
import { ROUTES } from '../../utils/routes'

/**
 * Prepares the list of routes that will be in the list, displayed at the top of our site
 * @return {Array<any>}
 */
const routesList = (): Array<any> => {
  const res = []
  ROUTES.forEach((value, key) => {
    res.push(<li key={key}><NavLink className="navbar-item" to={value[0]}>{key}</NavLink></li>)
  })
  return res
}

/**
 * Nav component
 */
export default () =>
  (
    <nav>
      <ul>
        {routesList()}
      </ul>
    </nav>
  )
