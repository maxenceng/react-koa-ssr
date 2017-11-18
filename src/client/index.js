// @flow

import ReactDOM from 'react-dom'

import { QUERY_SELECTOR } from '../utils/config'
import wrapApp from './wrapApp'
import App from './App'
import store from './store'

// flow-disable-next-line
import '../styles/main.sass'

const selector = document.querySelector(QUERY_SELECTOR)

// ReactJS recommends to use hydrate instead of render for SSR
// flow-disable-next-line
ReactDOM.hydrate(wrapApp(App, store), selector)

// HMR
if (module.hot) {
  // flow-disable-next-line
  module.hot.accept('./App', () => {
    // eslint-disable-next-line
    const NextApp = require('./App').default
    // flow-disable-next-line
    ReactDOM.hydrate(wrapApp(NextApp, store), selector)
  })
}
