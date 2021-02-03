<template>
  <div>
    <t-slides class="wrapper" width="200px" height="300px" :selected.sync="selected">
      <t-slides-item name="1">
        <div class="box">1</div>
      </t-slides-item>

      <t-slides-item name="2">
        <div class="box">2</div>
      </t-slides-item>

      <t-slides-item name="3">
        <div class="box">3</div>
      </t-slides-item>

    </t-slides>
  </div>
</template>

<script>
import slides from '@/slides';
import slidesItem from '@/./slides-item';

// function ajax(parent_id = 0) {
//   return new Promise((success, fail) => {
//     let result = db.filter((item) => item.parent_id === parent_id);
//     result.forEach(node => {
//       // node.isLeaf = true / false
//       if (db.filter(item => item.parent_id === node.id).length > 0) {
//         node.isLeaf = false;
//       } else {
//         node.isLeaf = true;
//       }
//     });
//     success(result);
//   });
//   return result;
// }

export default {
  name: 'demo',
  components: {
    't-slides': slides,
    't-slides-item': slidesItem
  },
  data() {
    return {
      selected: undefined,
    };
  },
  created() {
  },
  mounted() {
    // ajax(0).then(result => {
    //   console.log(result);
    //   this.source = result;
    // });
  },
  methods: {
    // loadData({id}, updateSource) {
    //   ajax(id).then(result => {
    //     updateSource(result); // 回调：把别人传给我的函数调用一下
    //   });
    // },
    // xxx() {
    //   ajax(this.selected[0].id).then(result => {
    //     let lastLevelSelected = this.source.filter(item => item.id === this.selected[0].id)[0];
    //     this.$set(lastLevelSelected, 'children', result);
    //   });
    // }
  },
};
</script>

<style lang="scss" scoped>
* {margin: 0; padding: 0; box-sizing: border-box;}
.wrapper {
  margin: 40px;
}
.box {
  width: 100%;
  height: 350px;
  background: #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
}
</style>
