// @flow

// import { APP_NAME } from '../../utils/config'
import renderApp from '../renderApp'
import { aboutPage } from '../defaultState'

const get = async (ctx: Object, next: any) => {
  await next()
  ctx.body = renderApp(ctx.url, aboutPage())
}

const post = async (ctx: Object, next: any) => {
  await next()
}

export { get, post }
