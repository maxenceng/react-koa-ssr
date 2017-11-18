// @flow

import React from 'react'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

/**
 * Wraps the app to have Redux, HMR and the router
 * @param  {any} Component
 * @param  {any} reduxStore
 */
export default (Component: any, reduxStore: any) =>
  (
    <Provider store={reduxStore}>
      <BrowserRouter>
        <AppContainer>
          <Component />
        </AppContainer>
      </BrowserRouter>
    </Provider>
  )
