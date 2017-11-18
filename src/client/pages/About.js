// @flow

import React from 'react'

import Message from '../containers/Message'
import Button from '../containers/Button'
import DynamicHelmet from '../components/DynamicHelmet'

/**
 * Displayed on the /about route
 */
export default () =>
  (
    <div>
      <DynamicHelmet
        title="About - React Koa Boilerplate"
        description="React Koa Boilerplate About Page"
        keywords="React Koa Boilerplate SSR Redux"
      />
      <h1>About</h1>
      <Message />
      <Button />
    </div>
  )
