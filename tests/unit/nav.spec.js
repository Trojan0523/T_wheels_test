import chai, {expect} from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);
import {shallowMount, mount} from '@vue/test-utils';
import Nav from '@/nav/nav.vue';
import NavItem from '@/nav/nav-item.vue';
import SubNav from '@/nav/sub-nav.vue';
import Vue from 'vue';

describe('Button.vue', () => {
  xit('存在.', () => {
    expect(Nav).to.exist;
  });
  xit('支持Selected存在', (done) => {
    Vue.component('t-nav-item', NavItem);
    Vue.component('t-sub-nav', SubNav);
    const wrapper = mount(Nav, {
      propsData: {
        selected: 'home',
      },
      slots: {
          default: `
        <t-nav-item name="home">首页</t-nav-item>
          <t-sub-nav name="about1">
            <t-nav-item name="developers">开发团队</t-nav-item>
            <t-nav-item name="culture">企业文化</t-nav-item>
            <t-nav-item name="phone">联系电话</t-nav-item>
        </t-sub-nav>
            <t-nav-item name="hire">招聘</t-nav-item>
            `
      }
    });
    setTimeout(() => {
      expect(wrapper.find('[data-name="home"].selected').exists()).to.be.true
      done()
    }, 0)
  });
  xit('会触发update:selected事件', (done) => {
    const callback = sinon.fake()
    Vue.component('t-nav-item', NavItem);
    Vue.component('t-sub-nav', SubNav);
    const wrapper = mount(Nav, {
      propsData: {
        selected: 'home',
      },
        slots: {
          default: `
        <t-nav-item name="home">首页</t-nav-item>
          <t-sub-nav name="about1">
            <t-nav-item name="developers">开发团队</t-nav-item>
            <t-nav-item name="culture">企业文化</t-nav-item>
            <t-nav-item name="phone">联系电话</t-nav-item>
        </t-sub-nav>
            <t-nav-item name="hire">招聘</t-nav-item>
            `
        },
        listeners: {
          'update:selected': callback
        }
    })
      wrapper.find('[data-name="developers"]').trigger('click')
        expect(callback).to.have.been.calledWith('developers')
      done()
  })
});
