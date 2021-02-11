<template>
  <div class="t-nav-item" :class="{selected}" @click="onClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 't-nav-item',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  inject: ['root'],
  created() {
    this.root.addItem(this) // 如果被选中，就通知父级组件

  },
  data () {
    return {
      selected: false
    }
  },
  methods: {
    onClick() {
      this.$emit('add:selected', this.name)
    }
  }
};
</script>
<style lang="scss" scoped>
@import "var";
.t-nav-item {
  padding: 10px 20px;
  position: relative;
  &.selected {
      border-bottom: 2px solid $blue;
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
    }
  }
}
.t-sub-nav .t-nav-item {
  &.selected {
    background: $gray;
    color: $color;
    &::after {
      display: none;
    }
  }
}
</style>
