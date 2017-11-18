// @flow

import React from 'react'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'

import { ROUTES } from '../utils/routes'
import Nav from './components/Nav'

const createRoutes = (routes) => {
  const res = []
  routes.forEach((value, key) => {
    if (key === 'Home') {
      res.push(<Route key={key} exact path={value[0]} component={value[1]} />)
    } else if (key !== 'Not Found') {
      res.push(<Route key={key} path={value[0]} component={value[1]} />)
    } else {
      res.push(<Route key={key} component={value[1]} />)
    }
  })
  return res
}

export default () =>
  (
    <div>
      <Nav />
      <Switch>
        {createRoutes(ROUTES)}
      </Switch>
    </div>
  )
