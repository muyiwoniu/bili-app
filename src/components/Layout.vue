<template>
  <div class="container">
      <header class="head">
          <slot name="head"></slot>
      </header>
      <div class="mid">
          <div class="left">
              <slot name="left"></slot>
          </div>
          <div class="right">
              <slot name="main"></slot>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container {
    position: fixed;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
}
.head {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 50px;
    background: #fff;
    box-shadow: 0 1px 5px #cdcdcd;
    z-index: 999;
}
.mid {
    position: absolute;
    top: 50px;
    bottom: 0;
    left: 0;
    right: 0;
}
.left {
    float: left;
    width: 300px;
    height: 100%;
}
.right {
    height: 100%;
    background: #f4f4f4;
    overflow: hidden;
}
</style>