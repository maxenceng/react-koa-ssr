// @flow

// import { APP_NAME } from '../../utils/config'
import renderApp from '../renderApp'

const get = async (ctx: Object, next: any) => {
  await next()
  ctx.body = renderApp(ctx.url)
}

const post = async (ctx: Object, next: any) => {
  await next()
}

export { get, post }
