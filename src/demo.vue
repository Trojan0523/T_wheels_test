<template>
  <div>
    <!--    <t-slides class="wrapper" width="200px" height="300px" :selected.sync="selected">-->
    <!--      <t-slides-item name="1">-->
    <!--        <div class="box">1</div>-->
    <!--      </t-slides-item>-->

    <!--      <t-slides-item name="2">-->
    <!--        <div class="box">2</div>-->
    <!--      </t-slides-item>-->

    <!--      <t-slides-item name="3">-->
    <!--        <div class="box">3</div>-->
    <!--      </t-slides-item>-->

    <!--    </t-slides>-->
    /*
    <t-nav :selected.sync="selected" vertical style="width: 200px; margin: 20px;">*/
      /*
      <t-nav-item name="home">首页</t-nav-item>
      */
      /*
      <t-sub-nav name="about">*/
        /*
        <template slot="title">关于</template>
        */
        /*
        <template>*/
          /*
          <slot name="popover">*/
            /*
            <t-nav-item name="team">开发团队</t-nav-item>
            */
            /*
            <t-nav-item name="culture">企业文化</t-nav-item>
            */
            /*
            <t-nav-item name="phone">联系电话</t-nav-item>
            */
            /*
            <t-sub-nav name="contacts">*/
              /*
              <template slot="title">联系方式</template>
              */
              /*
              <t-nav-item name="wechat">微信</t-nav-item>
              */
              /*
              <t-nav-item name="QQ">QQ</t-nav-item>
              */
              /*
              <t-nav-item name="telephone">phone</t-nav-item>
              */
              /*
              <t-sub-nav name="phone">*/
                /*
                <template slot="title">手机</template>
                */
                /*
                <t-nav-item name="cb">移动</t-nav-item>
                */
                /*
                <t-nav-item name="cu">联通</t-nav-item>
                */
                /*
                <t-nav-item name="cc">电信</t-nav-item>
                */
                /*
              </t-sub-nav>
              */
              /*
            </t-sub-nav>
            */
            /*
          </slot>
          */
          /*
        </template>
        */
        /*
      </t-sub-nav>
      */
      /*
      <t-nav-item name="hire">招聘</t-nav-item>
      */
      /*
      <t-nav-item name="about">关于</t-nav-item>
      */
      /*
    </t-nav>
    */
    <t-nav :selected.sync="selected" style="margin-top: 200px;" @update:selected="onChange">
      <t-nav-item name="home">首页</t-nav-item>
      <t-sub-nav name="about1">
        <template slot="title">关于</template>
        <template>
          <slot name="popover">
            <t-nav-item name="team">开发团队</t-nav-item>
            <t-nav-item name="culture">企业文化</t-nav-item>
            <t-nav-item name="phone">联系电话</t-nav-item>
            <t-sub-nav name="contacts">
              <template slot="title">联系方式</template>
              <t-nav-item name="wechat">微信</t-nav-item>
              <t-nav-item name="QQ">QQ</t-nav-item>
              <t-nav-item name="telephone">phone</t-nav-item>
              <t-sub-nav name="phone">
                <template slot="title">手机</template>
                <t-nav-item name="cb">移动</t-nav-item>
                <t-nav-item name="cu">联通</t-nav-item>
                <t-nav-item name="cc">电信</t-nav-item>
              </t-sub-nav>
            </t-sub-nav>
          </slot>
        </template>
      </t-sub-nav>
      <t-nav-item name="hire">招聘</t-nav-item>
      <t-nav-item name="about">关于</t-nav-item>
    </t-nav>
    <p style="margin-top: 250px;">用户选中了{{ selected }}</p>
  </div>
</template>

<script>
// import slides from '@/slides/slides';
// import slidesItem from './slides/slides-item';
import nav from '@/nav/nav';
import subnav from '@/nav/sub-nav';
import navItem from '@/nav/nav-item';

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
    // 't-slides': slides,
    // 't-slides-item': slidesItem
    't-nav': nav,
    't-sub-nav': subnav,
    't-nav-item': navItem
  },
  data() {
    return {
      selected: 'home',
    };
  },
  mounted() {
    // ajax(0).then(result => {
    //   console.log(result);
    //   this.source = result;
    // });
  },
  methods: {
    onChange(selected) {
      console.log(selected);
      if (selected ==='home') {
        alert('hi');
      }
    },
    watch: {
      selected(newValue) {
        if (newValue === 'home') {
          console.log('hi');
        }
      }
    }
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
