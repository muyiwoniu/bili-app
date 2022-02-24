<template>
  <div class="channel-search">
    <Search @search="handleSearch" placeHolder="搜索频道"></Search>
  </div>
</template>

<script>
import Search from "./Search.vue";
export default {
  components: {
    Search,
  },
  methods: {
    handleSearch(e) {
      console.log("搜索", e);
    },
  },
};
</script>

<style scoped>
.channel-search {
  box-sizing: border-box;
  width: 100%;
  height: 35px;
  padding: 0 20px;
  margin: 20px 0;
}
</style>