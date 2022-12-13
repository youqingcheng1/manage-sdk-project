import Config from './config'
import routes from './router'
import { ManageSystem, getRouter, App } from '@/index'

const options = {
  ...Config,
  extra:{},
  routes
}

const manageSys = new ManageSystem(options)
const { router, getRoutes } = getRouter()

export { router, manageSys, getRoutes, App }