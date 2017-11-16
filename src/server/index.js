import Koa from 'koa'
import Serve from 'koa-static'
import Mount from 'koa-mount'
import Router from 'koa-router'

import index from './routes/indexRoute'
import { IS_PROD, STATIC_PATH, WEB_PORT } from '../utils/config'

const app = new Koa()
const router = new Router()

app.use(Mount('/static', Serve(STATIC_PATH)))
router.use('/', index.routes())

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(WEB_PORT, () => {
  // eslint-disable-next-line
  console.log(`Running on port: ${WEB_PORT}(${IS_PROD ? 'production' : 'development'})`)
})
