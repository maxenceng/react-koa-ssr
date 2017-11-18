// @flow

import renderApp from '../renderApp'

/**
 * @param  {Object}   ctx
 * @param  {Function} next
 * @return {Promise}
 */
const get = async (ctx: Object, next: Function): Promise<any> => {
  await next()
  ctx.body = renderApp(ctx.url)
}

/**
 * @param  {Object}   ctx
 * @param  {Function} next
 * @return {Promise}
 */
const post = async (ctx: Object, next: Function): Promise<any> => {
  await next()
}

export { get, post }
