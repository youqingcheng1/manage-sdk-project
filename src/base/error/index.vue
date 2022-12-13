<template>
  <div class="container-fixed">
    <div class="error-bg">
      <img src="./images/404.svg" alt="" />
    </div>
    <div class="error-tip">错误提示</div>
    <div class="error-btn-wrap">
      <el-button plain @click="fGoBack">返回</el-button>
      <el-button @click="goHome">回到首页</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import PageCommon from '@/common/page'
import { getRouter } from '../../router'
export default {
  methods: {
    goHome() {
      PageCommon.redirectToHomePage()
    },
    fGoBack() {
      const { router } = getRouter()
      router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
  .error-bg {
    width: 536px;
    height: 261px;
    background-size: 100% 100%;
    margin: 18vh auto 0;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .error-tip {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    color: #333;
    font-style: italic;
    margin-top: 50px;
    word-break: break-word;
  }

  .error-tip-desc {
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    color: #333;
    font-style: italic;
    word-break: break-word;
  }

  .error-btn-wrap {
    margin-top: 30px;
    text-align: center;
  }
</style>
