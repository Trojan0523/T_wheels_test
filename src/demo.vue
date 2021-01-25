<template>
  <div style="padding: 20px;">
    <t-cascader :source.sync="source" popover-height="200px"
                :selected.sync="selected"
                @update:selected="xxx"
                :load-data="loadData">
    </t-cascader>
  </div>
</template>

<script>
import Button from '@/button';
import Cascader from '@/cascader';
import db from '@/db.js';

function ajax(parent_id = 0) {
  return new Promise((success, fail) => {
    let result = db.filter((item) => item.parent_id === parent_id);
    success(result);
  });
  return result;
}

export default {
  name: 'demo',
  components: {
    't-button': Button,
    't-cascader': Cascader
  },
  data() {
    return {
      selected: [],
      source: []
    };
  },
  mounted() {
    ajax(0).then(result => {
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
