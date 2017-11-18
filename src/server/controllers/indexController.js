// @flow

// import { APP_NAME } from '../../utils/config'
import renderApp from '../renderApp'
import { homePage } from '../defaultState'

const get = async (ctx: Object, next: any) => {
  await next()
  ctx.body = renderApp(ctx.url, homePage())
}

const post = async (ctx: Object, next: any) => {
  await next()
}

export { get, post }
