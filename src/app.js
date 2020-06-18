import Vue from "vue";
import Button from "./button";
import Icon from "./icon"
import Group from "./button-group"
import Input from "./input";

Vue.component('g-button', Button);
Vue.component('t-icon', Icon);
Vue.component('g-button-group', Group);
Vue.component('t-input',Input);
new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false,
        message: 'h1'
    },
    methods: {
        inputChange(e) {
            console.log(e.target.value);
        }
    }
})