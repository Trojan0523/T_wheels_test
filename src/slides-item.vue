<template>
  <transition name="slide">
    <div class="t-slides-item" v-if="visible" :class="{reverse}">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      selected: undefined,
      reverse: false
    };
  },
  computed: {
    visible() {
      console.log(this.selected);
      // console.log(`我的name是${this.name}`);
      // console.log(`我的方向是${this.reverse ? '反向' : '正向'}`);
      return this.selected === this.name
    }
  }
};
</script>

<style lang="scss" scoped>
.t-slides-item {
}

.slide-enter-active, .slide-leave-active {
  transition: all 3s;
}

.slide-leave-active {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.slide-enter {
  transform: translateX(100%);
  opacity: 0;
}

.slide-enter.reverse {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-leave-to {
  transform: translateX(-100%) scale(0.5);
  opacity: 0;
}

.slide-leave-to.reverse {
  transform: translateX(100%) scale(0.5);
  opacity: 0;
}
</style>
