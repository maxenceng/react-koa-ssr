// @flow

import Koa from 'koa'

import { WEB_PORT } from '../utils/config'

const app = new Koa()

app.use(async (ctx) => {
  ctx.body = 'test'
})

app.listen(WEB_PORT)
