import chai, {expect} from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

import {shallowMount, mount} from '@vue/test-utils';
import Slides from '@/slides.vue';
import SlidesItem from '@/slides-item.vue';
import Vue from 'vue';

describe('slides-item.vue', () => {
  xit('存在.', () => {
    expect(SlidesItem).to.exist;
  });
  xit('接受TSlidesItem', (done) => {
    Vue.component('TSlidesItem', SlidesItem);
    const wrapper = mount(Slides, {
      propsData: {
        autoPlay: false
      },
      slot: {
        default: `
        <t-slides-item name="1">
        <div class="box">1</div>
        </t-slides-item>
        <t-slides-item name="2">
        <div class="box">2</div>
        </t-slides-item>
        <t-slides-item name="3">
        <div class="box">3</div>
        </t-slides-item>    
        `
      }
    });
    setTimeout(() => {
      console.log(wrapper.find('.box1').element);
      expect(wrapper.find('.box1').exists()).to.be.true;
      done();
    });
  });
  xit('点击第二个就展示第二个', (done) => {
    const wrapper = mount(Slides, {
      propsData: {
        autoPlay: false,
        selected: '1'
      },
      slot: {
        default: `
        <t-slides-item name="1">
        <div class="box">1</div>
        </t-slides-item>
        <t-slides-item name="2">
        <div class="box">2</div>
        </t-slides-item>
        <t-slides-item name="3">
        <div class="box">3</div>
        </t-slides-item>    
        `
      },
      listeners: {
        'update:selected': (x) => {
        expect(x).to.eq('2')
          done()
        }
      }
    });
    setTimeout(() => {
      wrapper.find('[data-index="1"]').trigger('click')
    })
  });
  xit('会自动播放', (done) => {
    Vue.component('TSlidesItem', SlidesItem);
    const callback = sinon.fake();
    const wrapper = mount(Slides, {
      propsData: {
        autoPlay: true,
        autoPlayDelay: 500,
        selected: '1'
      },
      slot: {
        default: `
        <t-slides-item name="1">
        <div class="box">1</div>
        </t-slides-item>
        <t-slides-item name="2">
        <div class="box">2</div>
        </t-slides-item>
        <t-slides-item name="3">
        <div class="box">3</div>
        </t-slides-item>    
        `
      },
      listeners: {
        'update:selected': callback
      }
    });
    setTimeout(() => {
      expect(callback).to.have.been.calledWith('2')
      done()
    }, 510)
  })
  xit('可以点击上一张', () => {})
  xit('可以点击下一张', ()=> {})
  });
