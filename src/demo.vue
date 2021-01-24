<template>
  <div style="padding: 20px;">
    <t-cascader :source="source" popover-height="200px"
                :selected.sync="selected">
    </t-cascader>
  </div>
</template>

<script>
import Button from '@/button';
import Cascader from '@/cascader';
import db from '@/db.js';

function ajax(parent_id = 0) {
  return db.filter((item) => item.parent_id === parent_id)
}
console.log(ajax());
export default {
  name: 'demo',
  components: {
    't-button': Button,
    't-cascader': Cascader
  },
  data() {
    return {
      selected: [],
      source: ajax()
    };
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
