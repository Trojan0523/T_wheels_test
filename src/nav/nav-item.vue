<template>
  <div class="t-nav-item" :class="{selected, vertical}"
       @click="onClick" :data-name="name">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TNavItem',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  inject: ['root', 'vertical'],
  created() {
    this.root.addItem(this); // 如果被选中，就通知父级组件

  },
  data() {
    return {
      selected: false
    };
  },
  methods: {
    onClick() {
      this.root.namePath = [];
      this.$parent.updateNamePath && this.$parent.updateNamePath(); // 另外一种组件通信方式， 子组件调用通知父组件
      this.$emit('update:selected', this.name);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "var";

.t-nav-item {
  padding: 10px 20px;
  position: relative;

  &:not(.vertical) {
    &.selected {
      &::after {
        content: '';
        position: absolute;
        border-bottom: 2px solid $blue;
        bottom: 0;
        left: 0;
        width: 100%;
      }
    }
  }
  &.vertical {
    &.selected {
      color: $blue;
    }
  }
}

a {
  color: inherit;
  text-decoration: none;
}

.t-sub-nav .t-nav-item:not(.vertical) {
  &.selected {
    background: $gray;
    color: $color;

    &::after {
      display: none;
    }
  }
}
</style>
