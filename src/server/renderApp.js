// @flow

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router'
import Helmet from 'react-helmet'

import { STATIC_PATH, QUERY_CLASS, IS_PROD, WDS_PORT } from '../utils/config'
import initStore from './initStore'
import App from '../client/App'


export default (location: string, initialState: ?Object, routerContext: ?Object = {}) => {
  const store = initStore(initialState)
  // eslint-disable-next-line function-paren-newline
  const appHtml = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={location} context={routerContext}>
        <App />
      </StaticRouter>
    </Provider>)
  const head = Helmet.rewind()

  return `
  <html>
    <head>
      ${head.title}
      ${head.meta}
      <link rel="stylesheet" href="${STATIC_PATH}/css/main.css">
    </head>
    <body>
      <div class="${QUERY_CLASS}">${appHtml}</div>
      <script>window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState())}</script>
      <script src="${IS_PROD ? '' : `http://localhost:${WDS_PORT}/`}${STATIC_PATH}/js/bundle.js"></script>
    </body>
  </html>
    `
}
