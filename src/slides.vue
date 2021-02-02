<template>
  <div class="t-slides">
    <div class="t-slides-window" ref="window">
      <div class="t-slides-wrapper">
        <slot></slot>
      </div>
    </div>
    <div class="t-slides-dots">
      {{ childrenLength }}
      <span v-for="(n, index) in childrenLength"
            :key="index" :class="{active: selectedIndex === n -1}"
            @click="select(n-1)">
        {{ n-1 }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'slides',
  props: {
    selected: {
      type: String,
    },
    autoplay: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      childrenLength: 0,
      lastSelectedIndex: undefined
    };
  },
  mounted() {
    this.updateChildren();
    this.playAutomatically();
    console.log(this.$children);
    this.childrenLength = this.$children.length;
  },
  updated() {
    this.updateChildren();
  },
  computed: {
    selectedIndex() {
      return this.names.indexOf(this.selected) || 0;
    },
    names() {
      return this.$children.map(vm => vm.name);
    }
  },
  methods: {
    playAutomatically() {
      let index = this.names.indexOf(this.getSelected());
      let run = () => {
        let newIndex = index - 1;
        if (newIndex === -1) {newIndex = this.names.length - 1; }
        if (newIndex === this.names.length) {newIndex = 0;}
        this.select(newIndex);
        setTimeout(run, 2000);
      };
      setTimeout(run, 2000);
    },
    getSelected() {
      let first = this.$children[0];
      return this.selected || first.name;
    },
    select(index) {
      this.lastSelectedIndex = this.selectedIndex
      this.$emit('update:selected', this.names[index]);
    },
    updateChildren() {
      let selected = this.getSelected();
      console.log('selected', selected);
      this.$children.forEach((vm) => {
        vm.reverse = this.selectedIndex > this.lastSelectedIndex ? false : true
        this.$nextTick(() => {
          vm.selected = selected;
        })
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.t-slides {
  &-window {
    overflow: hidden;
  }
  &-wrapper {
    position: relative;
  }
  &-dots {
    > span {
      &-active {
        background: red;
      }
    }
  }
}
</style>
