<template>
  <div class="channel" v-if="data">
    <!-- 只有data有值的时候，渲染整个区域 -->
    <Item :isActive="isActive" @active="$emit('active')">
      <div class="inner">
        <span class="name">{{ data.name }}</span>
        <span class="number">{{ data.channel_count }}</span>
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
    data: {
      type: Object,
      //   default: () => ({}), // 下面的简写，{}需用()括起来
      default: function () {
        return {}; //在属性默认值里，凡是遇到了一个属性默认值是一个对象的，必须用一个函数，把对象作为这个函数的返回结果。如果不屑函数直接写个对象或数组，会导致如果有很多组件实例的话，每个组件的默认值都是一样的，有可能导致组件之间相互影响
      },
    },
  },
  components: {
    Item,
  },
};
</script>

<style scoped>
.channel {
  width: 100%;
  height: 40px;
  line-height: 40px;
}
.inner {
  padding: 0 20px;
}
.name {
  color: #999;
  font-size: 14px;
}
.number {
  color: #999;
  font-size: 12px;
  margin-left: 10px;
}
.name,
.number {
  float: left;
}
</style>