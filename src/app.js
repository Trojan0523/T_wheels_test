import Vue from "vue";
import Button from "./button";
import Icon from "./icon"
import Group from "./button-group"
import Input from "./input";
import Row from "./row"
import Col from "./col"
import Layout from "./layout"
import Header from "./header"
import Content from "./content"
import Sider from "./sider"
import Footer from "./footer"
import Toast from "./toast"
import Tabs from "./tabs"
import TabsHead from "./tabs-head"
import TabsItem from "./tabs-item"
import TabsBody from "./tabs-body"
import TabsPane from "./tabs-pane"
import TPopover from "./popover"
import plugin from "./plugin";

Vue.component('t-button', Button);
Vue.component('t-icon', Icon);
Vue.component('t-button-group', Group);
Vue.component('t-input', Input);
Vue.component('t-row', Row);
Vue.component('t-col', Col)
Vue.component('t-layout', Layout)
Vue.component('t-header', Header)
Vue.component('t-content', Content)
Vue.component('t-sider', Sider)
Vue.component('t-footer', Footer)
Vue.component('t-toast', Toast)
Vue.component('t-tabs',Tabs)
Vue.component('t-tabs-head',TabsHead)
Vue.component('t-tabs-item',TabsItem)
Vue.component('t-tabs-body',TabsBody)
Vue.component('t-tabs-pane',TabsPane)
Vue.component('t-popover',TPopover)
Vue.use(plugin)

new Vue({
    el: '#app',
    data: {
        selectedTab: 'sports',
        loading1: false,
        loading2: true,
        loading3: false,
        message: 'h1'
    },
    created() {
    },
    methods: {
        inputChange(e) {
            console.log(e.target.value);
        },
        showToast1() {
            this.showToast('top')
        },
        showToast2() {
            this.showToast('middle')
        },
        showToast3() {
            this.showToast('bottom')
        },
        showToast(position) {
            this.$toast(`你的智商目前为 ${parseInt(Math.random()*100)}。您的智商需要付费`, {
                position,
                enableHtml: false,
                closeButton: {
                    text: '已充值',
                    callback() {
                        console.log('他说已经付费了');
                    }
                },
                autoClose: 3,
            })
        },
    }
})