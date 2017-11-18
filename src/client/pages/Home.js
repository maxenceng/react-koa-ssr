// @flow

import React from 'react'

import Message from '../containers/Message'
import Button from '../containers/Button'
import DynamicHelmet from '../components/DynamicHelmet'

/**
 * Displayed on the / route
 */
export default () =>
  (
    <div>
      <DynamicHelmet
        title="Home - React Koa Boilerplate"
        description="React Koa Boilerplate Home Page"
        keywords="React Koa Boilerplate SSR Redux"
      />
      <h1>Home</h1>
      <Message />
      <Button />
    </div>
  )
