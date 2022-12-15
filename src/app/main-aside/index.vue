<template>
  <div class="site-aside" :class="{ 'is-collapse': mainAsideState.isCollapse }">
    <div class="site-collapse" @click="mainAsideState.isCollapse = !mainAsideState.isCollapse">
      <el-icon><View v-if="!mainAsideState.isCollapse" /><Hide v-else /></el-icon>
    </div>
    <div class="site-nav" v-if="mainAsideState.list.length" :style="{ width: asideWidth }">
      <el-menu
        text-color="#ccc"
        active-text-color="#456fe7"
        :default-active="defaultActive"
        :collapse="mainAsideState.isCollapse"
        :collapse-transition="false"
        :unique-opened="true"
        :router="true"
      >
        <template v-for="menu in mainAsideState.list" :key="menu.id">
          <menu-item
            :list="menu.list"
            :current="menu"
            v-if="menu.list && menu.list.length > 0"
            :collapse="mainAsideState.isCollapse">
          </menu-item>
          <el-menu-item
            :index="menu.fe_uri"
            v-else
          >
            <!-- <i class="iconfont" v-if="!menu.icon" :class="[menu.icon, {'icon': !!menu.icon}]"></i> -->
            <label class="collapse fv-inline-text" v-if="!menu.icon && mainAsideState.isCollapse">{{ menu.title }}</label>
            <template #title>
              <span class="first-title label">{{ menu.title }}</span>
            </template>
          </el-menu-item>
        </template>
      </el-menu>
    </div>
    <div class="site-nav" v-else :style="{ width: asideWidth }">
      <div class="blank">没有菜单</div>
    </div>
  </div>
</template>
<script src="./script.ts" lang="ts"></script>
<style lang="less">
.site-aside .el-loading-mask {
  background-color: rgba(0, 0, 0, 0.6);
}
.el-menu-item .icon {
  margin-right: 5px;
}
.el-menu-item .collapse {
  position: absolute;
  left: 0;
  width: 100%;
  cursor: pointer;
  padding-left: 5px;
  font-size: 12px;
}
.el-menu-item,
.el-submenu__title {
  .label {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-word;
    white-space: break-spaces;
    line-height: 1.2;
    margin-right: 6px;
  }
}
</style>
