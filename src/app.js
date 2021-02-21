import Vue from 'vue';
import Button from './button/button';
import Icon from './icon';
import Group from './button/button-group';
import Input from './input';
import Row from './grid/row';
import Col from './grid/col';
import Layout from './layout/layout';
import Header from './layout/header';
import Content from './layout/content';
import Sider from './layout/sider';
import Footer from './layout/footer';
import Toast from './toast';
import Tabs from './tabs/tabs';
import TabsHead from './tabs/tabs-head';
import TabsItem from './tabs/tabs-item';
import TabsBody from './tabs/tabs-body';
import TabsPane from './tabs/tabs-pane';
import TPopover from './popover';
import TCollapse from './collapse/collapse';
import TCollapseItem from './collapse/collapse-item';
import plugin from './plugin';
import Cascader from '@/cascader/cascader';

Vue.component('t-button', Button);
Vue.component('t-icon', Icon);
Vue.component('t-button-group', Group);
Vue.component('t-input', Input);
Vue.component('t-row', Row);
Vue.component('t-col', Col);
Vue.component('t-layout', Layout);
Vue.component('t-header', Header);
Vue.component('t-content', Content);
Vue.component('t-sider', Sider);
Vue.component('t-footer', Footer);
Vue.component('t-toast', Toast);
Vue.component('t-tabs', Tabs);
Vue.component('t-tabs-head', TabsHead);
Vue.component('t-tabs-item', TabsItem);
Vue.component('t-tabs-body', TabsBody);
Vue.component('t-tabs-pane', TabsPane);
Vue.component('t-popover', TPopover);
Vue.component('t-collapse', TCollapse);
Vue.component('t-collapse-item', TCollapseItem);
Vue.component('t-cascader', Cascader);
Vue.use(plugin);

new Vue({
  el: '#app',
  data: {
    selectedTab: ['2', '1'],
    selectedTab1: ['sports'],
    loading1: false,
    loading2: true,
    loading3: false,
    message: 'h1'
  },
  created() {
  },
  methods: {
    showToast1() {
      this.showToast('top');
    },
    showToast2() {
      this.showToast('middle');
    },
    showToast3() {
      this.showToast('bottom');
    },
    showToast(position) {
      this.$toast(`你的智商目前为 ${parseInt(Math.random() * 100)}。您的智商需要付费`, {
        position,
        enableHtml: false,
        closeButton: {
          text: '已充值',
          callback() {
            console.log('他说已经付费了');
          }
        },
        autoClose: 3,
      });
    },
  }
});
