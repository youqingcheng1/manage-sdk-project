import mainHeader from './main-header/index.vue'
import mainAside from './main-aside/index.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'AppMain',
  components: {
    mainHeader,
    mainAside
  }
})
