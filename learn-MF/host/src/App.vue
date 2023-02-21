<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import { defineAsyncComponent } from "vue";
// 导入远程模块
// 1. 组件
import RemoteApp from "remote_app/App";
// 2. 工具函数
import { add } from "remote_app/utils";
// 3. 异步组件
const AysncRemoteButton = defineAsyncComponent(
  () => import("remote_app/Button")
);

const data: number = add(1, 2);

</script>

<template>
  <div>
    <HelloWorld/>
    <RemoteApp />
    <AysncRemoteButton />
    <p>应用 2 工具函数计算结果: 1 + 2 = {{ data }}</p>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
