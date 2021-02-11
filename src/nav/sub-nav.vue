<template>
  <div class="t-sub-nav" @click="">
    <span @click="onClick">
      <slot name="title"></slot>
    </span>
    <div class="t-sub-nav-popover" v-show="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 't-sub-nav',
  data() {
    return {
      open: false
    }
  },
  props: {},
  methods: {
    onClick() {
      this.open = !this.open
    }
  }
};
</script>
<style lang="scss" scoped>
@import "var";
.t-sub-nav {
  position: relative;
  >span {
    padding: 10px 20px;
    display: block;
    vertical-align: top;
  }
  &-popover {
    background: white;
    position: absolute;
    top:100%;
    left: 0;
    margin-top: 4px;
    white-space: nowrap;
    box-shadow: 0 0 0 2px fade-out(black, 0.8) ;
    border-radius: $border-radius;
    font-size: $font-size;
    color: $light-color;
    min-width: 8em;
  }
}
  .t-sub-nav .t-sub-nav .t-sub-nav-popover {
    top: 0;
    left: 100%;
    margin-left: 8px;
  }
</style>
