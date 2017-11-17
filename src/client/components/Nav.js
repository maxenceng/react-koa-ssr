import React from 'react'
import { NavLink } from 'react-router-dom'
import { ROUTES } from '../../utils/routes'

const routesList = () => {
  const res = []
  ROUTES.forEach((value, key) => {
    res.push(<li key={key}><NavLink className="navbar-item" to={value[0]}>{key}</NavLink></li>)
  })
  return res
}

export default () =>
  (
    <nav>
      <ul>
        {routesList()}
      </ul>
    </nav>
  )
