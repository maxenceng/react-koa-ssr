// @flow

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router'
import Helmet from 'react-helmet'
import { oneLine } from 'common-tags'

import { IS_PROD } from '../utils/config'
import initStore from './initStore'
import App from '../client/App'
import template from '../utils/template'

/**
 * Renders our app on the server
 * @param  {string} location
 * @param  {} initialState
 * @param  {} routerContext
 * @return {string}
 */
export default (location: string, initialState: ?Object, routerContext: ?Object = {}): string => {
  const store = initStore(initialState)
  // eslint-disable-next-line function-paren-newline
  const appHtml = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={location} context={routerContext}>
        <App />
      </StaticRouter>
    </Provider>)
  const head = Helmet.rewind()
  const tpl = template(head.title, head.meta, appHtml, store)
  return IS_PROD ? oneLine`${tpl}` : tpl
}
