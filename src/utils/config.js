// @flow

// General
export const APP_NAME = 'React Koa SSR'
export const IS_PROD = process.env.NODE_ENV === 'production'
export const STATIC_PATH = 'static'
export const QUERY_CLASS = 'root'
export const QUERY_SELECTOR = `.${QUERY_CLASS}`

// Server
export const WEB_PORT = process.env.PORT || 8000

// Webpack
export const WDS_PORT = 7000
