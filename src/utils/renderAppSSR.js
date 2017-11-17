import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router'

import initStore from '../server/initStore'
import App from '../client/App'
import { STATIC_PATH, QUERY_CLASS, IS_PROD, WDS_PORT } from '../utils/config'

export default (location, plainState, routerContext = {}) => {
  const store = initStore(plainState)
  // eslint-disable-next-line function-paren-newline
  const appHtml = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={location} context={routerContext}>
        <App />
      </StaticRouter>
    </Provider>)
  return (
    `
    <!doctype html>
    <html>
      <head>
        <title>FIX ME</title>
        <link rel="stylesheet" href="${STATIC_PATH}/css/style.css">
      </head>
      <body>
        <div class="${QUERY_CLASS}">${appHtml}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState())}
        </script>
        <script src="${IS_PROD ? '' : `http://localhost:${WDS_PORT}/`}${STATIC_PATH}/js/bundle.js"></script>
      </body>
    </html>
    `
  )
}
