
const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
    it('存在.', () => {
        expect(Row).to.exist
    })
    describe('Col', () => {
        it('存在', function () {
            return expect(Col).to.exist;
        });
    })
    it('接受gutter 属性', (done) => {
        Vue.component('t-row', Row)
        Vue.component('t-col', Col)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <t-row gutter="20">
            <t-col span="12"></t-col>
            <t-col span="12"></t-col>
        </t-row>
        `
        const vm = new Vue({
            el: div
        })
        // console.log(vm.$el.outerHTML);
        setTimeout(() => {
            const row = vm.$el.querySelector('.row')
            expect(getComputedStyle(row).marginLeft).to.eq('-10px')
            expect(getComputedStyle(row).marginRight).to.eq('-10px')
            const cols = vm.$el.querySelectorAll('.col')
            expect(getComputedStyle(cols[0]).paddingLeft).to.eq('10px')
            expect(getComputedStyle(cols[1]).paddingRight).to.eq('10px')
            done()
            vm.$el.remove()
            vm.$destroy()
            //    异步任务需要done做回调，这是测试框架的约定
        })
    }, 1000)
    it('接受 align 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Row)
        const vm = new Constructor({
            propsData: {
                align: 'left'
            }
        }).$mount(div)
        const element = vm.$el
        expect(getComputedStyle(element).justifyContent).to.equal('flex-start')
        vm.$el.remove()
        vm.$destroy()
    });

})