// @flow

import Home from '../client/pages/Home'
import About from '../client/pages/About'
import NotFound from '../client/pages/404'

// Routes
export const HOME_ROUTE = '/'
export const ABOUT_ROUTE = '/about'
export const NOT_FOUND_ROUTE = '/*'

// Route labels
export const HOME_LABEL = 'Home'
export const ABOUT_LABEL = 'About'
export const NOT_FOUND_LABEL = 'Not Found'


// Map of routes
export const ROUTES: Map<string, Object> = new Map()
ROUTES.set(HOME_LABEL, { route: HOME_ROUTE, module: Home })
ROUTES.set(ABOUT_LABEL, { route: ABOUT_ROUTE, module: About })
ROUTES.set(NOT_FOUND_LABEL, { route: NOT_FOUND_ROUTE, module: NotFound })
