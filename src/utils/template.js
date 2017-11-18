// @flow

import { STATIC_PATH, QUERY_CLASS, IS_PROD, WDS_PORT } from './config'

/**
 * Template to display when loading a route
 * @param  {[type]} title
 * @param  {[type]} meta
 * @param  {[type]} appHtml
 * @param  {[type]} store
 */
export default (title: string, meta: string, appHtml: string, store: Object) =>
  `
<html lang="en">
  <head>
    ${title}
    ${meta}
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#FFFFFF" />
  </head>
  <body>
    <div class="${QUERY_CLASS}">${appHtml}</div>
    <noscript>Your browser does not support JavaScript!</noscript>
    <script>window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState())}</script>
    <script src="${IS_PROD ? '' : `http://localhost:${WDS_PORT}/`}${STATIC_PATH}/js/bundle.js"></script>
  </body>
</html>
  `
