import { APP_NAME } from '../../utils/config'
import renderApp from '../../utils/renderApp'

const get = async (ctx, next) => {
  await next()
  ctx.body = renderApp(APP_NAME)
}

const post = async (ctx, next) => {
  await next()
}

export { get, post }
