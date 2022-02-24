<template>
  <Layout>
    <template v-slot:head> 导航 </template>
    <template v-slot:left>
      <Aside></Aside>
    </template>
    <template v-slot:main> 主区域 </template>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout.vue"; // @是webpack的知识，是一个别名，定位到src文件夹目录
import Aside from "../components/Aside.vue";
export default {
  components: {
    Layout,
    Aside,
  },
};
</script>

<style>
</style>