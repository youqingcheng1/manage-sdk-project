import { defineComponent } from 'vue'
import { userInfo, systemInfo } from '@/mock/baseInfo'
export default defineComponent({
  name: 'MainHeader',
  setup() {
    return {
      systemInfo,
      userInfo
    }
  }
})
