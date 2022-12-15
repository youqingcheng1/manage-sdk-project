import { defineComponent, reactive, computed } from 'vue'
import { menuTree } from '@/mock/baseInfo'
import MenuItem from './menu-item.vue'
import { returnNavModel } from '@/types/prop.type'
import { useRoute } from 'vue-router'
interface apiNavModel {
  id: number,
  parent_id: number,
  items: Array<apiNavModel>,
  level: number,
  slug: string,
  sort: number,
  title: string,
  status: number,
  type: number,
  uri: string,
  display?: number,
  icon?: string
}
export default defineComponent({
  name: 'MainAside',
  components: { MenuItem },
  setup() {
    const state = reactive({
      isCollapse: false,
      list: [] as Array<returnNavModel>
    })

    const buildNavs = (data: Array<apiNavModel>): Array<returnNavModel> => {
      return data.filter(f => f.display).map(m => {
        const { id, parent_id, uri, title, icon } = m
        const menu = { id, parent_id, fe_uri: uri, title, icon }
        if (!m.items || m.items.length <= 0) return menu
        const p_menu = { ...menu, fe_uri: String(m.id), list: buildNavs(m.items) }
        return p_menu
      })
    }

    // 重组navs数据
    state.list = buildNavs(menuTree)

    const asideWidth = computed(() => (state.isCollapse ? '64px' : '220px'))
    const defaultActive = computed(() => (useRoute() ? useRoute().path : '/'))

    return { mainAsideState: state, asideWidth, defaultActive }
  }
})
