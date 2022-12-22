<template>
  <div class="header-container">
    <div class="system-info">
      <span style="color:#456fe7">{{ systemInfo.name }}系统</span>，欢迎你
    </div>
    <div class="user-info">
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-avatar :size="30" src="" style="margin-right:10px" />
          {{ userInfo.name }}
          <el-icon class="el-icon--right"><arrow-down /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item><a href="script:;">退出</a></el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script lang="ts" src="./script.ts"></script>
<style lang="less" scoped src="./style.less"></style>
