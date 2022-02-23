<template>
  <div class="item" :class="{ active: isActive }" @click="handleClick">
    <!-- 插槽 -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean, //约束该属性的类型是Boolean
      // required: true, //约束该属性必须要传递
      default: false, // 属性默认值
    },
  },
  methods: {
    handleClick() {
      // 发生了一件重要的事情，但我不知道怎么办，此时应该通知父组件
      this.$emit("active"); // 抛出一个自定义事件。参数1，事件名，任意取；参数2，可选事件参数
    },
  },
};
</script>

<style scoped>
.item {
  width: 100%;
  height: 100%;
  transition: 0.2s;
  cursor: pointer;
}
.item:hover {
  background: #f4f4f4;
}
.active {
  background: #e7e7e7;
}
</style>