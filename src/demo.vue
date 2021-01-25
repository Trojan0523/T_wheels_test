<template>
  <div>
    <div style="padding: 20px;">
      <t-cascader :source.sync="source" popover-height="200px"
                  :selected.sync="selected"
                  @update:selected="xxx"
                  :load-data="loadData">
      </t-cascader>
    </div>
    <t-popover>
      <template>
        <button>点我</button>
      </template>
      <template slot="content">
        弹出内容
      </template>
    </t-popover>
  </div>
</template>

<script>
import Button from '@/button';
import Cascader from '@/cascader';
import db from '@/db.js';
import Popover from '@/popover';
import {removeListener} from './click-outside';
function ajax(parent_id = 0) {
  return new Promise((success, fail) => {
    let result = db.filter((item) => item.parent_id === parent_id);
    result.forEach(node => {
      // node.isLeaf = true / false
      if (db.filter(item => item.parent_id === node.id).length > 0) {
        node.isLeaf = false;
      } else {
        node.isLeaf = true;
      }
    });
    success(result);
  });
  return result;
}

export default {
  name: 'demo',
  components: {
    't-button': Button,
    't-cascader': Cascader,
    't-popover': Popover
  },
  data() {
    return {
      selected: [],
      source: []
    };
  },
  mounted() {
    ajax(0).then(result => {
      console.log(result);
      this.source = result;
    });
  },
  methods: {
    loadData({id}, updateSource) {
      ajax(id).then(result => {
        updateSource(result); // 回调：把别人传给我的函数调用一下
      });
    },
    xxx() {
      ajax(this.selected[0].id).then(result => {
        let lastLevelSelected = this.source.filter(item => item.id === this.selected[0].id)[0];
        this.$set(lastLevelSelected, 'children', result);
      });
    }
  },
  destroyed() {
    removeListener()
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

img {
  max-width: 100%;
}

html {
  --font-size: 14px;
}

body {
  font-size: var(--font-size);
}
</style>
