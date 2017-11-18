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
export const ROUTES:Map<string, Array<any>> = new Map()
ROUTES.set(HOME_LABEL, [HOME_ROUTE, Home])
ROUTES.set(ABOUT_LABEL, [ABOUT_ROUTE, About])
ROUTES.set(NOT_FOUND_LABEL, [NOT_FOUND_ROUTE, NotFound])
