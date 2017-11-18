// @flow

import Router from 'koa-router'

import { get } from '../controllers/aboutController'

const index = new Router()

index.get('/', get)

export default index
