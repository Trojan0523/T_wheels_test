import Vue from "vue";
import Button from "./button";
import Icon from "./icon"
import Group from "./button-group"

Vue.component('g-button', Button);
Vue.component('t-icon', Icon);
Vue.component('g-button-group', Group);
new Vue({
    el: '#app',
    data: {
        loading1: false,
        loading2: true,
        loading3: false
    },
    method: {}
})
import chai from 'chai';
import spies from 'chai-spies';
chai.use(spies)
const expect = chai.expect;
// 单元测试
/*
*   当前测试icon:setting路径是否正确
* */
{
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            icon: 'settings'
        }
    });
    button.$mount();
    let useElement = button.$el.querySelector('use');
    let href = useElement.getAttribute('xlink:href');
    expect(href).to.eq('#isettings')
    button.$el.remove();
    button.$destroy();
}
/*
*   当前测试icon:loading是否加载正确
* */
{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
            loading: true
        }
    });
    vm.$mount();
    let useElement = vm.$el.querySelector('use');
    let href = useElement.getAttribute('xlink:href');
    expect(href).to.eq('#iloading')
    vm.$el.remove();
    vm.$destroy();
}
/*
*   当前测试icon:position是否正确
* */
{
    const div = document.createElement('div');
    document.body.appendChild(div);
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'settings'
        }
    });
    vm.$mount(div);
    let svg = vm.$el.querySelector('svg');
    let {order} = window.getComputedStyle(svg);
    expect(order).to.eq('1');
    vm.$el.remove();
    vm.$destroy();
}
{
    //  mock
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
        }
    });
    vm.$mount();
    let spy = chai.spy(function () {})
    vm.$on('click', spy)
    let button = vm.$el
    button.click();
    expect(spy).to.have.been.called()
}
