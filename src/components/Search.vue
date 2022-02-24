<template>
  <form class="search-area" @submit.prevent="handleSearch">
    <input type="text" v-model="searchValue" :placeHolder="placeHolder" />
    <div class="icon" @click="handleSearch">
      <Icon type="search"></Icon>
    </div>
  </form>
</template>

<script>
import Icon from "./Icon.vue";
export default {
  components: {
    Icon,
  },
  props: {
    placeHolder: {
      type: String,
      default: "搜索关键字",
    },
  },
  data() {
    return {
      searchValue: "",
    };
  },
  methods: {
    handleSearch() {
      if (this.searchValue) {
        this.$emit("search", this.searchValue);
      }
    },
  },
};
</script>

<style scoped>
.search-area {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 0 45px 0 8px;
  border: 1px solid #e7e7e7;
  border-radius: 3px;
}
.search-area input {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
}
.search-area input::placeholder {
    color: #c0c0c0;
}
.icon {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 100%;
  color: #c0c0c0;
  cursor: pointer;
}
</style>