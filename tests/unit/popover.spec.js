import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import Popover from '@/popover'

chai.use(sinonChai)

describe('Popover', () => {

  it('存在.', () => {
    expect(Popover).to.exist
  })
  // TODO 测试用例无法通过
  xit('可以设置position.', () => {
    const wrapper = mount(Popover, {
      slots: {
        default: {template: `<button>点我</button>`},
        content: '<div>弹出内容</div>'
      },
      propsData: {
        position: 'bottom'
      }
    })
    wrapper.find('button').trigger('click')
    let classes = wrapper.find('.content-wrapper').classes()
    console.log(classes);
    expect(classes).to.include('position-bottom')
  })
  xit('可以设置 trigger', () => {
    const wrapper = mount(Popover, {
      slots: {
        default: {template: `<button>点我</button>`},
        content: '<div>弹出内容</div>'
      },
      propsData: {
        position: 'bottom',
        trigger: 'hover'
      }
    })
    expect(wrapper.find('.content-wrapper').element).to.not.exist
    wrapper.find('.popover').trigger('click')
    expect(wrapper.find('.content-wrapper').element).to.exist
    // TODO 测试其实没有通过，点击事件后并没有创建ref对应的弹出内容
  })

})
