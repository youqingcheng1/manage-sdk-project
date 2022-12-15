import Apps from './app/index.vue'
import Config from './config'
import { initRouter, getRouter } from './router'

import './assets/style/common.less'

const App = Apps
class ManageSystem {
  constructor (options: systemInitOptions) {
    if (options) {
      Config.init(options)
      initRouter()
    }
  }

  public getRouter = getRouter
}

export { getRouter, App, ManageSystem }
