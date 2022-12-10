import { createApp,Component } from 'vue'
import { App, } from '../src/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElIcons from '@element-plus/icons-vue'

const app = createApp(App)
const ElIconsObj = ElIcons as Indexable<Component<any>>
for (const name in ElIcons) {
  app.component(name, ElIconsObj[name])
}

app
  .use(ElementPlus)
  .mount('#app')
