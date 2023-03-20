<template>
  <div class="app">
    <router-link to="/login">login</router-link>
    <router-link to="/home">home</router-link>
    <router-link to="/about">about</router-link>
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped>
a {
  margin: 10px;
}
</style>
