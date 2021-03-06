const expect = chai.expect;
import Vue from 'vue'
import Tabs from '@/tabs/tabs'
import TabsHead from "@/tabs/tabs-head";
import TabsItem from "@/tabs/tabs-item";
import TabsBody from "@/tabs/tabs-body";
import TabsPane from "@/tabs/tabs-pane";
Vue.component('t-tabs',Tabs)
Vue.component('t-tabs-head',TabsHead)
Vue.component('t-tabs-item',TabsItem)
Vue.component('t-tabs-body',TabsBody)
Vue.component('t-tabs-pane',TabsPane)
Vue.config.productionTip = false
Vue.config.devtools = false

describe('TabsItem', () => {
    it('存在.', () => {
        expect(TabsItem).to.exist
    })
    it('接受 name 属性', function () {
        const Constructor = Vue.extend(TabsItem)
        const vm = new Constructor({
            propsData: {
                name: 'xxx',
            }
        }).$mount()
        expect(vm.$el.getAttribute('data-name')).to.eq('xxx')
    });
    it('接受 disabled 属性', function () {
        const Constructor = Vue.extend(TabsItem)
        const vm = new Constructor({
            propsData: {
                disabled: true,
            }
        }).$mount()
        expect(vm.$el.classList.contains('disabled')).to.be.true
        const callback = sinon.fake();
        vm.$on('click', callback)
        vm.$el.click()
        expect(callback).to.have.not.been.called
    //    测试覆盖率
    })
})
