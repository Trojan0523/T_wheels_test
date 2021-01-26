const expect = chai.expect;
import Vue from 'vue'
import Collapse from '../src/collapse'
import CollapseItem from '../src/collapse-item'

Vue.config.productionTip = false
Vue.config.devtools = false

Vue.component('t-collapse',Collapse)
Vue.component('t-collapse-item', CollapseItem)

describe('Collapse', () => {
    it('存在.', () => {
        expect(Collapse).to.exist
    })
    it('接受 selected 属性',  (done) =>  {
        const div =  document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
            <t-collapse :selected="xxx">
                <t-collapse-item name="1" title="标题一"><span id="content-1">1</span></t-collapse-item>
                <t-collapse-item name="1" title="标题二"><span id="content-2">2</span></t-collapse-item>
                <t-collapse-item name="1" title="标题三"><span id="content-3">3</span></t-collapse-item>
            </t-collapse>
        `
        const vm = new Vue({
            el: div,
            data: {
                xxx: ['1','2']
            }
        })
        setTimeout(() => {
            expect(vm.$el.querySelector('#content-1')).to.exist
            expect(vm.$el.querySelector('#content-2')).to.exist
            expect(vm.$el.querySelector('#content-3')).to.exist
            done()
        })
    })
    it('接受 single 属性',  (done)=> {
        const div =  document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
            <t-collapse :selected.sync="xxx" single>
                <t-collapse-item name="1" title="标题一"><span id="content-1">1</span></t-collapse-item>
                <t-collapse-item name="2" title="标题二"><span id="content-2">2</span></t-collapse-item>
                <t-collapse-item name="3" title="标题三"><span id="content-3">3</span></t-collapse-item>
            </t-collapse>
        `
        const vm = new Vue({
            el: div,
            data: {
                xxx: ['1']
            }
        })
        setTimeout(() => {
            vm.$el.querySelector('[data-name="2"]').click()
            setTimeout(() => {
                expect(vm.$el.querySelector('#content-1')).to.not.exist
                expect(vm.$el.querySelector('#content-2')).to.exist
                done()
            })
        })
    })
    it('触发 update:selected 事件', (done) => {
        const div =  document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
            <t-collapse :selected.sync="xxx" single @update:selected="onSelect">
                <t-collapse-item name="1" title="标题一"><span id="content-1">1</span></t-collapse-item>
                <t-collapse-item name="2" title="标题二"><span id="content-2">2</span></t-collapse-item>
                <t-collapse-item name="3" title="标题三"><span id="content-3">3</span></t-collapse-item>
            </t-collapse>
        `
        const callback = sinon.fake()
        const vm = new Vue({
            el: div,
            data: {
                xxx: ['1']
            },
            methods: {
                onSelect: callback
            }
        })
        setTimeout(() => {
            vm.$el.querySelector('[data-name="2"]').click()
            setTimeout(() => {
                expect(callback).to.have.been.called
                done()
            })
        })

    })
})