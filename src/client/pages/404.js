// @flow

import React from 'react'
import DynamicHelmet from '../components/DynamicHelmet'

/**
 * Displayed when the user tries to access a non-existing route
 */
export default () =>
  (
    <div>
      <DynamicHelmet
        title="Not Found - React Koa Boilerplate"
        description="React Koa Boilerplate 404 Page Not Found"
        keywords="React Koa Boilerplate SSR Redux"
      />
      <p>404 Not Found!</p>
    </div>
  )
