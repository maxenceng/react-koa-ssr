import ReactDOM from 'react-dom'

import { QUERY_SELECTOR } from '../utils/config'
import wrapApp from '../utils/wrapApp'
import App from './App'
import store from './store'

const selector = document.querySelector(QUERY_SELECTOR)

ReactDOM.render(wrapApp(App, store), selector)

if (module.hot) {
  module.hot.accept('./App', () => {
    // eslint-disable-next-line
    const NextApp = require('./App').default
    ReactDOM.render(wrapApp(NextApp, store), selector)
  })
}
