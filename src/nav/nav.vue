<template>
  <div class="t-nav">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 't-nav',
  provide() {
    return {
      root: this
    }
  },
  data() {
    return {
      items: []
    }
  },
  props: {
    selected: {
      type: Array,
      default: () => []
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    console.log(this.items);
    this.updateChildren();
    this.listenToChildren();
  },
  updated() {
    this.updateChildren();
  },
  methods: {
    addItem(vm) {
      this.items.push(vm)
    },
    updateChildren() {
      this.items.forEach(vm => {
        vm.selected = this.selected.indexOf(vm.name) >= 0 ? true : false;
      });
    },
    listenToChildren() {
      this.items.forEach(vm => {
        vm.$on('add:selected', (name) => {
          if (this.multiple) {
            if (this.selected.indexOf(name) < 0) {
              let copy = JSON.parse(JSON.stringify(this.selected));
              copy.push(name);
              this.$emit('update:selected', copy);
            }
          } else {
            this.$emit('update:selected', [name]);
          }
        });
      });

    }
  },
};
</script>
<style lang="scss" scoped>
.t-nav {
  display: flex;
  border: 1px solid red;
}
</style>
