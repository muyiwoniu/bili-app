<template>
  <div class="title-menu">
    <Item :isActive="isActive" @active="$emit('active')">
      <div class="inner">
        <div class="left">
          <!-- 具名插槽 -->
          <slot name="title"></slot>
        </div>
        <div class="right">
          <slot name="icon"></slot>
        </div>
      </div>
    </Item>
  </div>
</template>

<script>
import Item from "./Item.vue";
export default {
  props: {
    isActive: {
      type: Boolean, //约束该属性的类型是Boolean
      // required: true, //约束该属性必须要传递
      default: false, // 属性默认值
    },
  },
  components: {
    Item,
  },
};
</script>

<style scoped>
.title-menu {
  width: 100%;
  height: 45px;
  border: 1px solid #f1f1f1;
  line-height: 45px;
}
.inner {
  padding: 0 20px;
}
.left {
  float: left;
  color: #212121;
  font-weight: 500;
}
.right {
  float: right;
  color: #999;
  font-size: 12px;
}
</style>