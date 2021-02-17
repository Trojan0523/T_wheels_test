<template>
  <div class="t-sticky-wrapper" ref="wrapper" :style="{height}">
    <div class="t-sticky" :class="classes" :style="{left, width, top}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TSticky',
  props: {
    distance: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      sticky: false,
      left: undefined,
      width: undefined,
      height: undefined,
      top: undefined
    };
  },
  created() {
    // 节流options，加上用户体验不够好，性能提升一点
    this.timerId = null
  },
  mounted() {
    this.windowScrollHandler = this._windowScrollHandler.bind(this)
    window.addEventListener('scroll', this.windowScrollHandler)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.windowScrollHandler);
  },
  methods: {
    offsetTop() {
      let {top} = this.$refs.wrapper.getBoundingClientRect();
      return top + window.scrollY
    },
    _windowScrollHandler() {
      // height 初始值
      let top = this.offsetTop();
      if (window.scrollY > top - this.distance) {
          // window.scrollY > top + window.scrollY ，原因是因为这个top有可能是负数
          let {height, left, width} = this.$refs.wrapper.getBoundingClientRect();
          this.height = height + 'px';
          this.left = left + 'px';
          this.width = width + 'px';
          this.sticky = true;
          this.top = this.distance + 'px'
        } else {
          this.height = undefined
          this.width = undefined
          this.left = undefined
          this.top = undefined
          this.sticky = false;
        }
    }
  },
  computed: {
    classes() {
      return {
        sticky: this.sticky
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.t-sticky {
  &.sticky {
    position: fixed;
  }
}
</style>
