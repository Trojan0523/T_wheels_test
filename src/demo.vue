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
    <!--    <t-nav :selected.sync="selected" vertical style="width: 200px; margin: 20px;">-->
    <!--      <t-nav-item name="home">首页</t-nav-item>-->
    <!--      <t-sub-nav name="about">-->
    <!--        <template slot="title">关于</template>-->
    <!--        <template>-->
    <!--          <slot name="popover">-->
    <!--            <t-nav-item name="team">开发团队</t-nav-item>-->
    <!--            <t-nav-item name="culture">企业文化</t-nav-item>-->
    <!--            <t-nav-item name="phone">联系电话</t-nav-item>-->
    <!--            <t-sub-nav name="contacts">-->
    <!--              <template slot="title">联系方式</template>-->
    <!--              <t-nav-item name="wechat">微信</t-nav-item>-->
    <!--              <t-nav-item name="QQ">QQ</t-nav-item>-->
    <!--              <t-nav-item name="telephone">phone</t-nav-item>-->
    <!--              <t-sub-nav name="phone">-->
    <!--                <template slot="title">手机</template>-->
    <!--                <t-nav-item name="cb">移动</t-nav-item>-->
    <!--                <t-nav-item name="cu">联通</t-nav-item>-->
    <!--                <t-nav-item name="cc">电信</t-nav-item>-->
    <!--              </t-sub-nav>-->
    <!--            </t-sub-nav>-->
    <!--          </slot>-->
    <!--        </template>-->
    <!--      </t-sub-nav>-->
    <!--      <t-nav-item name="hire">招聘</t-nav-item>-->
    <!--      <t-nav-item name="about">关于</t-nav-item>-->
    <!--    </t-nav>-->
    <!--    <t-nav :selected.sync="selected" style="margin: 100px 0;" @update:selected="onChange">-->
    <!--      <t-nav-item name="home">首页</t-nav-item>-->
    <!--      <t-sub-nav name="about">-->
    <!--        <template slot="title">关于</template>-->
    <!--        <template>-->
    <!--          <slot name="popover">-->
    <!--            <t-nav-item name="team">开发团队</t-nav-item>-->
    <!--            <t-nav-item name="culture">企业文化</t-nav-item>-->
    <!--            <t-nav-item name="phone">联系电话</t-nav-item>-->
    <!--            <t-sub-nav name="contacts">-->
    <!--              <template slot="title">联系方式</template>-->
    <!--              <t-nav-item name="wechat">微信</t-nav-item>-->
    <!--              <t-nav-item name="QQ">QQ</t-nav-item>-->
    <!--              <t-nav-item name="telephone">phone</t-nav-item>-->
    <!--              <t-sub-nav name="phone">-->
    <!--                <template slot="title">手机</template>-->
    <!--                <t-nav-item name="cb">移动</t-nav-item>-->
    <!--                <t-nav-item name="cu">联通</t-nav-item>-->
    <!--                <t-nav-item name="cc">电信</t-nav-item>-->
    <!--              </t-sub-nav>-->
    <!--            </t-sub-nav>-->
    <!--          </slot>-->
    <!--        </template>-->
    <!--      </t-sub-nav>-->
    <!--      <t-nav-item name="hire">招聘</t-nav-item>-->
    <!--      <t-nav-item name="about">关于</t-nav-item>-->
    <!--    </t-nav>-->

    <t-sticky>
      <div style="border: 1px solid gray; background: red">{{selected}}</div>
    </t-sticky>
    <div style="margin: 20px;">
      <t-table :columns="columns" :data-source="dataSource" bordered :selected-items.sync="selected" :striped="false"
               :order-by.sync="orderBy" @update:orderBy="x" :loading="loading" :height="400" expend-field="description" checkable>
        <template slot-scope="xxx">
          <t-button @click="edit(xxx.item)" style="margin-right: 4px;">编辑</t-button>
          <t-button @click="view(xxx.item)">查看</t-button>
          <t-button>删除</t-button>
        </template>
      </t-table>
      <t-pager :total-page="20" :current-page.sync="currentPage" style="margin:20px; "></t-pager>
    </div>
    <div style="margin: 20px;">
      <t-table :columns="columns" :data-source="dataSource2" bordered compact :striped="false"  :selected-items.sync="selected"></t-table>
      <t-pager :total-page="20" :current-page.sync="currentPage" style="margin:20px; "></t-pager>
    </div>

    <div>只能上传300kb以内的 png，jpeg文件</div>
    {{error}}
    <br>
    <t-uploader action="http://127.0.0.1:3000/upload" name="file"
                :parse-response="parseResponse" :file-list.sync="fileList"
                @error="error=$event" :size-limit="1024*1024">
        <t-button icon="upload">上传</t-button>
      <!-- :fileList="fileList" @update:fileList="fileList = $event"  :fileList.sync="fileList" -->
    </t-uploader>
    <t-button>保存</t-button>
  </div>
</template>

<script>
// import slides from '@/slides/slides';
// import slidesItem from './slides/slides-item';
import nav from '@/nav/nav';
import subnav from '@/nav/sub-nav';
import navItem from '@/nav/nav-item';
import pager from '@/pager';
import sticky from '@/sticky';
import table from '@/table';
import button from '@/button/button';
import uploader from '@/uploader';
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
    't-nav-item': navItem,
    't-pager': pager,
    't-sticky': sticky,
    't-table': table,
    't-button': button,
    't-uploader': uploader
  },
  data() {
    return {
      // selected: 'home',
      currentPage: 2,
      columns: [
        {text: '姓名', field: 'name', width: 100},
        {text: '分数', field: 'score', width: 200},
      ],
      orderBy:{ // true -开启排序，但是不确定asc还是desc
        // name: 'asc',
        score: 'desc'
      },
      dataSource: [
        {id: 1, name: '方方', score: 100, description: 'xxxxx'},
        {id: 2, name: '卜卜', score: 100, description: 'xxxxx'},
        {id: 3, name: '邓邓', score: 80},
        {id: 4, name: '恩恩', score: 80},
        {id: 5, name: '白白', score: 75},
        {id: 6, name: '邓邓', score: 70},
        {id: 7, name: '方方', score: 100},
        {id: 8, name: '卜卜', score: 100},
        {id: 9, name: '邓邓', score: 80},
        {id: 10, name: '恩恩', score: 80},
        {id: 11, name: '白白', score: 75},
        {id: 12, name: '邓邓', score: 70},
        {id: 13, name: '方方', score: 100},
        {id: 14, name: '卜卜', score: 100},
        {id: 15, name: '邓邓', score: 80},
        {id: 16, name: '恩恩', score: 80},
        {id: 17, name: '白白', score: 75},
        {id: 18, name: '邓邓', score: 70},
        {id: 19, name: '白白', score: 75},
        {id: 20, name: '邓邓', score: 70},
      ],
      dataSource2: [
        {id: 21, name: '方方', score: 100, description: 'xxxxx'},
        {id: 22, name: '卜卜', score: 100, description: 'xxxxx'},
        {id: 23, name: '邓邓', score: 80},
      ],
      selected: [],
      loading: false,
      fileList: [],
      error: ''
    };
  },
  mounted() {
    // ajax(0).then(result => {
    //   console.log(result);
    //   this.source = result;
    // });
  },
  methods: {
    // onChange(selected) {
    // },
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
    edit(item) {
      console.log(item + '被点击了')
    },
    view(item) {
      console.log(item + '被展示了');
    },
    x() {
      this.loading = true
      // 前端不要做排序，排序方法切换的时候通知后端进行当前升降序处理切换排序
      // ajax(url, oderBy) // api/users?score='desc'
      // .then(res => {this.dataSource = res.data})
      setTimeout(() => {
        this.dataSource = this.dataSource.sort((a,b) => a.score - b.score)
        console.log('hi');
        this.loading = false
      },3000)
    },
    parseResponse(response) {
      let object = JSON.parse(response)
      console.log(object);
      let url = `http://127.0.0.1:3000/preview/${object.id}`
      return url
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #888;
}
</style>
