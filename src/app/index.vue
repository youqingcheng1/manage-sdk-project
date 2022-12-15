<template>
  <el-containe class="site-container" direction="vertical">
    <el-header height="50px" class="site-header">
      <main-header></main-header>
    </el-header>
    <el-container class="site-container">
      <el-aside width="220px">
        <main-aside></main-aside>
      </el-aside>
      <el-main>
        <router-view :key="$route.fullPath" />
      </el-main>
    </el-container>
  </el-containe>
</template>

<script lang="ts" src="./script.ts"></script>
<style lang="less" src="./style.less"></style>
