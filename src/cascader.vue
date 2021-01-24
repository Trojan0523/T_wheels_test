<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
    </div>
    <div class="popover-wrapper" v-if="popoverVisible">
      <cascader-item :items="source" class="popover" :height="popoverHeight"
                     :selected="selected"
                     @update:selected="onUpdateSelected"></cascader-item>
    </div>
  </div>
</template>

<script>
import CascaderItem from '@/cascader-item';

export default {
  name: 'TCascader',
  components: {CascaderItem},
  props: {
    source: {
      type: Array
    },
    popoverHeight: {
      type: String
    },
    selected: {
      type: Array,
      default: () => {return []}
    }
  },
  data() {
    return {
      popoverVisible: false
    };
  },
  methods: {
    onUpdateSelected(newSelected) {
      this.$emit('update:selected', newSelected);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "var";

.cascader {
  position: relative;

  .trigger {
    height: 32px;
    width: 100px;
    border: 1px solid black;
  }

  .popover-wrapper {
    position: absolute;
    top: 100%;
    left: 0;
    background: white;
    display: flex;
    @extend .box-shadow;
  }
}
</style>
