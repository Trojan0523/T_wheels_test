import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'

chai.use(sinonChai)


import {shallowMount, mount} from '@vue/test-utils'
import Pager from "@/pager";
import Vue from 'vue'

describe('Pager', () => {
  it('存在.', () => {
    expect(Pager).to.exist
  })
  it('可以设置 totalPage和 currentPage', () => {
    const wrapper = mount(Pager, {
      propsData: {
        totalPage: 20,
        currentPage: 1,
      }
    })
    let selectedClass =wrapper.find('.current');
    expect(wrapper.exists()).to.be.true
    expect(wrapper.props().totalPage).to.eq(20)
    expect(selectedClass.text()).to.eq('1')
  })
  it('点击下一页可以跳转下一页', (done) => {
    const callback = sinon.fake()
    const wrapper = mount(Pager, {
      propsData: {
        totalPage: 10,
        currentPage: 2
      },
      listeners: {
        'update:currentPage': callback
      }
    })
    setTimeout(() => {
      wrapper.find('.next').trigger('click')
      expect(callback).to.have.been.calledWith(3)
      done()
    },100)
  })
  it('点击上一页可以跳转上一页', (done) => {
    const callback = sinon.fake()
    const wrapper = mount(Pager, {
      propsData: {
        totalPage: 10,
        currentPage: 2,
      },
      listeners: {
        'update:currentPage': callback
      }
    })
    setTimeout(() => {
      wrapper.find('.prev').trigger('click')
      expect(callback).to.have.been.calledWith(1)
      done()
    },100)
  })
})
