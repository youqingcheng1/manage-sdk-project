<template>
  <el-container class="site-container" direction="vertical">
    <div id="main">
      <router-view :key="$route.fullPath" />
    </div>
  </el-container>
</template>
<script lang="ts" src="./script.ts"></script>
