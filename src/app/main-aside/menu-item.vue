<template>
  <el-sub-menu :index="current.fe_uri" v-if="current">
    <template #title>
      <i class="iconfont" v-if="current.icon" :class="[current.icon, {'icon': !!current.icon}]"></i>
      <label class="collapse fv-inline-text" v-if="!current.icon && collapse">{{ current.title }}</label>
      <span class="label">{{ current.title }}</span>
    </template>
    <template v-for="subMenu in current.list" :key="subMenu.id">
      <MenuItem
        :list="subMenu.list"
        :current="subMenu"
        v-if="subMenu.list && subMenu.list.length > 0"
        :key="subMenu.id"
      ></MenuItem>
      <el-menu-item
        :index="`${subMenu.fe_uri}`"
        v-else
      >
        <template #title>
          <span class="subMenu-title label">{{ subMenu.title }}</span>
        </template>
      </el-menu-item>
    </template>
  </el-sub-menu>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { returnNavModel } from '@/types/prop.type'
export default defineComponent({
  name: 'MenuItem',
  props: {
    list: Array<Object>,
    current: Object as PropType<returnNavModel>,
    collapse: Boolean
  },
  setup() {
    return {}
  }
})
</script>
