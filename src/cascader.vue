<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
      {{result || '&nbsp;'}}
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
  },
  computed: {
    result() {
      return this.selected.map((item) => item.name).join('/')
    }
  }
};
</script>

<style lang="scss" scoped>
@import "var";

.cascader {
  position: relative;

  .trigger {
    height: $input-height;
    display: inline-flex;
    align-items: center;
    padding: 0 1em;
    width: 100px;
    min-width: 10em;
    border-radius: $border-radius;
    border: 1px solid black;
  }

  .popover-wrapper {
    position: absolute;
    top: 100%;
    left: 0;
    background: white;
    display: flex;
    margin-top: 8px;
    @extend .box-shadow;
  }
}
</style>
