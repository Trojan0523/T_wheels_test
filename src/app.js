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
import plugin from "./plugin";

Vue.component('g-button', Button);
Vue.component('t-icon', Icon);
Vue.component('g-button-group', Group);
Vue.component('t-input', Input);
Vue.component('t-row', Row);
Vue.component('t-col', Col)
Vue.component('t-layout', Layout)
Vue.component('t-header', Header)
Vue.component('t-content', Content)
Vue.component('t-sider', Sider)
Vue.component('t-footer', Footer)
Vue.component('t-toast', Toast)
Vue.use(plugin)
new Vue({
    el: '#app',
    data: {
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
        showToast() {
            this.$toast(`你的智商目前为 ${parseInt(Math.random()*100)}。您的智商需要付费`, {
                position: 'middle',
                enableHtml: false,
                closeButton: {
                    text: '已充值',
                    callback() {
                        console.log('他说已经付费了');
                    }
                },
                autoClose: false,
            })
        }
    }
})