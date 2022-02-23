<template>
  <i class="iconfont" :class="[iconClass, extraClass]"></i>
</template>

<script>
var map = {
  arrowUp: "icon-xiangshangjiantou",
  arrowDown: "icon-xiangxiajiantou",
  search: "icon-search",
};
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
    extraClass: {
      type: String,
      default: "",
    },
  },
  computed: {
    iconClass() {
      return map[this.type];
    },
  },
};
</script>

<style scoped>
@import url("//at.alicdn.com/t/font_3201219_7yg646x2q3b.css");
</style>