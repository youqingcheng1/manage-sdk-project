declare interface systemOption {
  name: string,
  appEnv: string,
  logUrl: string,
  cookie: string,
  key: string,
  authUrl: string,
  routes: Array[RouteRecordRaw]
}

declare interface systemInitOptions extends systemOption {
  extra: Object
}
