<template>
  <div class="login">
    <div class="login-box">
      <div class="login-box-title">后台管理系统</div>
      <LoginBoxForm />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onBeforeUnmount } from "vue"
import { Notification } from "@arco-design/web-vue"
import LoginBoxForm from "./c-cpns/LoginBoxForm.vue"

onMounted(() => {
  Notification.info({
    title: "欢迎使用后台管理系统模板",
    content: "账号 admin(管理员) 其他(游客) 密码随意",
    showIcon: false,
    duration: 0,
    closable: true
  })
})

onBeforeUnmount(() => {
  Notification.clear()
})
</script>

<style lang="less" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url("@/assets/image/login.jpg");
  background-size: cover;

  &-box {
    box-sizing: border-box;
    width: 360px;
    padding: 20px;
    border-radius: 6px;
    background-color: #fff;
    box-shadow: 0 0 10px #999;

    &-title {
      font-size: 24px;
      line-height: 36px;
      padding-bottom: 20px;
      margin-bottom: 20px;
      border-bottom: 1px solid #ccc;
    }
  }
}
</style>
