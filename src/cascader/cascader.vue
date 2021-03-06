<template>
  <div class="cascader" ref="cascader" v-click-outside="close">
    <div class="trigger" @click="toggle">
      {{ result || '&nbsp;' }}
    </div>
    <div class="popover-wrapper" v-if="popoverVisible">
      <cascader-item :items="source" class="popover" :height="popoverHeight"
                     :selected="selected" :loadData="loadData"
                     :loading-items="loadingItem"
                     @update:selected="onUpdateSelected"></cascader-item>
    </div>
  </div>
</template>

<script>
import CascaderItem from '@/cascader/cascader-item';
import ClickOutside from '@/click-outside';

export default {
  name: 'TCascader',
  components: {CascaderItem},
  directives: {
    ClickOutside
  },
  props: {
    source: {
      type: Array
    },
    popoverHeight: {
      type: String
    },
    selected: {
      type: Array,
      default: () => {return [];}
    },
    loadData: {
      type: Function
    }
  },
  data() {
    return {
      popoverVisible: false,
      loadingItem: {}
    };
  },
  methods: {
    open() {
      this.popoverVisible = true;
    },
    close() {
      this.popoverVisible = false;
    },
    toggle() {
      if (this.popoverVisible === true) {
        this.close();
      } else {
        this.open();
      }
    },
    onUpdateSelected: function (newSelected) {
      this.$emit('update:selected', newSelected);
      let lastItem = newSelected[newSelected.length - 1];
      let simplest = (children, id) => {
        return children.filter(item => item.id === id)[0];
      };
      let complex = (children, id) => {
        let noChildren = [];
        let hasChildren = [];
        children.forEach(item => {
          if (item.children) {
            hasChildren.push(item);
          } else {
            noChildren.push(item);
          }
        });
        let found = simplest(noChildren, id);
        if (found) {
          return found;
        } else {
          found = simplest(hasChildren, id);
          if (found) {return found;} else {
            for (let i = 0; i < hasChildren.length; i++) {
              found = complex(hasChildren[i].children, id);
              if (found) {
                return found;
              }
            }
          }
        }
      };
      let updateSource = (result) => {
        this.loadingItem = {}
        let copy = JSON.parse(JSON.stringify(this.source));
        let toUpdate = complex(copy, lastItem.id);
        toUpdate.children = result;
        // this.$set(toUpdate, 'children', result);
        this.$emit('update:source', copy);
      };
      if (!lastItem.isLeaf && this.loadData) {
          this.loadData(lastItem, updateSource); // 回调：把别人传给我的函数调用一下
          //  调用回调函数时候传一个函数， 这个函数理论上应该被调用
          this.loadingItem = lastItem;
      }
    }
  },
  computed: {
    result() {
      return this.selected.map((item) => item.name).join('/');
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/var";

.cascader {
  position: relative;
  border: 1px solid red;
  display: inline-block;

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
    z-index: 1;
    @extend .box-shadow;
  }
}
</style>
