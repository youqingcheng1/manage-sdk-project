import { loginUrlMap } from './env'
const system:systemOption = {
  name: '',
  appEnv: '',
  key: '',
  logUrl: '',
  cookie: '',
  authUrl: '',
  routes: []
}

function init(options: systemInitOptions) {
  system.logUrl = loginUrlMap[options.appEnv]
  system.name = options.name
  system.cookie = options.cookie
  system.routes = options.routes
}

export default {
  system,
  init
}
