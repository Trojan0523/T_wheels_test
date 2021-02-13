<template>
  <div class="t-nav" :class="{vertical}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 't-nav',
  provide() {
    return {
      root: this,
      vertical: this.vertical
    };
  },
  data() {
    return {
      items: [],
      namePath: []
    };
  },
  props: {
    selected: {
      type: String
    },
    vertical: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.updateChildren();
    this.listenToChildren();
  },
  updated() {
    this.updateChildren();
  },
  methods: {
    addItem(vm) {
      this.items.push(vm);
    },
    updateChildren() {
      this.items.forEach(vm => {
        vm.selected = this.selected === vm.name  ? true : false;
      });
    },
    listenToChildren() {
      this.items.forEach(vm => {
        vm.$on('update:selected', (name) => {
          this.$emit('update:selected', name);
        });
      });

    }
  },
};
</script>
<style lang="scss" scoped>
@import "var";

.t-nav {
  display: flex;
  border-bottom: 1px solid $gray;
  color: $color;
  cursor: default;
  user-select: none;

  &.vertical {
    flex-direction: column;
    border: 1px solid $gray;
  }
}
</style>
