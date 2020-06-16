import Vue from "vue";
import Button from "./button";
import Icon from "./icon"
import Group from "./button-group"

Vue.component('g-button', Button);
Vue.component('t-icon', Icon);
Vue.component('g-button-group',Group);
new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false
    },
    method: {}
})