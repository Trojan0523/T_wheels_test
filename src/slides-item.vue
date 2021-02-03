<template>
  <transition name="slide">
    <div class="t-slides-item" v-if="visible" :class="{reverse}">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'slidesItem',
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
      return this.selected === this.name
    }
  }
};
</script>

<style lang="scss" scoped>
.t-slides-item {
}

.slide-enter-active, .slide-leave-active {
  transition: all 0.5s;
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
}

.slide-enter.reverse {
  transform: translateX(-100%);
}

.slide-leave-to {
  transform: translateX(-100%);
}

.slide-leave-to.reverse {
  transform: translateX(100%);
}
</style>
