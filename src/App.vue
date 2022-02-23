<template>
  <div id="app" style="width: 300px">
    <!-- @子组件抛出的自定义事件名=“”  注册事件 -->
    <!-- <Item :isActive="curActive === 'dongman'" @active="curActive = 'dongman'">动漫</Item> -->
    <TitleMenu :isActive="activeId === 100" @active="activeId = 100">
      <template v-slot:title>
        <!-- 给title具名插槽传递内容 -->
        发现频道
      </template>
      <template v-slot:icon> > </template>
    </TitleMenu>
    <!-- <Channel :data="{ name: '动漫', channel_count: '222' }"></Channel> -->
    <ChannelList
      :columns="2"
      :activeId="activeId"
      @active="activeId = $event"
    ></ChannelList>
  </div>
</template>

<script>
import TitleMenu from "./components/TitleMenu.vue";
import ChannelList from "./components/ChannelList.vue";

export default {
  name: "App",
  components: {
    TitleMenu,
    ChannelList,
  },
  data() {
    // 组件的data配置不能配置一个对象，只能配置成一个函数，这个函数的返回结果来作为data
    // 组件的出现就是要复用的，如果每次用这个组件的时候都用的同一个配置对象，就会导致多个组件实例共享一个data，其中一个组件的变化会影响到另外一个组件，就会出问题。组件实例之间应该是相互独立的，互不影响。写成函数的好处是，每个组件虽然是配置一样，但它们的数据是来自于函数调用，返回的新的对象，保证了每个组件实例的data是不一样的
    return {
      activeId: 100, // 默认选中
    };
  },
  methods: {
    // test(e) {
    //   console.log(e);
    // },
  },
};
</script>

<style>
</style>
