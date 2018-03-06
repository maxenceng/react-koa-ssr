// @flow

import React from 'react'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'

import { ROUTES } from '../utils/routes'
import Nav from './components/Nav'

/**
 * Creates our routes for the React Router
 * @return {Array<Object>}
 */
const createRoutes = (): Array<Object> =>
  Array.from(ROUTES).map(([key, value]) => {
    if (key === 'Home') return <Route key={key} exact path={value.route} component={value.module} />
    if (key !== 'Not Found') return <Route key={key} path={value.route} component={value.module} />
    return <Route key={key} component={value.module} />
  })

/**
 * Contains the elements of the pages powered by React
 */
export default () =>
  (
    <div>
      <Nav />
      <Switch>
        {createRoutes()}
      </Switch>
    </div>
  )
