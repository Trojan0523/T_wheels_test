<template>
  <div class="t-sub-nav" :class="{active, vertical}" v-click-outside="close">
    <span class="t-sub-nav-label" @click="onClick">
      <slot name="title"></slot>
      <span class="t-sub-nav-icon" :class="{open, vertical}">
        <t-icon name="right"></t-icon>
      </span>
    </span>
    <template v-if="this.vertical">
    <transition @enter="enter" @leave="leave"
                @after-leave="afterLeave" @after-enter="afterEnter">
      <div class="t-sub-nav-popover" :class="{vertical}" v-show="open">
        <slot></slot>
      </div>
    </transition>
    </template>
    <template v-else>
      <div class="t-sub-nav-popover" v-show="open">
        <slot></slot>
      </div>
    </template>
  </div>
</template>

<script>
import ClickOutside from '@/click-outside';
import Icon from '../icon';

export default {
  name: 't-sub-nav',
  components: {
    't-icon': Icon
  },
  inject: ['root', 'vertical'],
  directives: {ClickOutside},
  data() {
    return {
      open: false,
    };
  },
  props: {
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    active() {
      return this.root.namePath.indexOf(this.name) >= 0 ? true : false;
    }
  },
  methods: {
    enter(el, done) {
      el.style.height = 'auto'
      let {height} = el.getBoundingClientRect();
      // console.log(height); // 进来前钩子手动设置成auto，能获取高度
      el.style.height = '0px'
      el.getBoundingClientRect() // 这里是会激活操作dom的，所以获取计算值要触发cssom渲染
      el.style.height = `${height}px`; // 直接赋值修改会合并，不做css渲染
      el.addEventListener('transitionend', () => {
        done();
      })
    },
    afterEnter(el) {
      el.style.height = 'auto';
    },
    leave(el, done) {
      let {height} = el.getBoundingClientRect()
      el.style.height = `${height}px`
      el.getBoundingClientRect()
      el.style.height = '0px';
      el.addEventListener('transitionend', () => {
        done(); // 调用之后立即执行display: none
      })
    },
    afterLeave(el) {
      el.style.height = 'auto';
    },
    close() {
      this.open = false;
    },
    onClick() {
      this.open = !this.open;
      console.log(this.open); // TODO: 排查问题处
    },
    updateNamePath() {
      this.active = true;
      if (this.$parent.updateNamePath) {
        this.root.namePath.unshift(this.name);
        this.$parent.updateNamePath();
      } else {
        // this.root.namePath = []
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "var";

.t-sub-nav {
  position: relative;
  &:not(.vertical) {
    &.active {
      &::after {
        content: '';
        position: absolute;
        border-bottom: 2px solid $blue;
        bottom: 0;
        left: 0;
        width: 100%;
      }
    }
  }
  &-icon {
    display: none;
  }

  &-label {
    padding: 10px 20px;
    display: block;

  }

  &-popover {
    background: white;
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 4px;
    white-space: nowrap;
    box-shadow: 0 0 0 2px fade_out(black, 0.8);
    border-radius: $border-radius;
    font-size: $font-size;
    color: $light-color;
    min-width: 8em;
    transition: height .25s linear;
    overflow: hidden;
    &.vertical {
      position: static;
      border-radius: 0;
      border: none;
      box-shadow: none;
      overflow: hidden;
    }
  }
}

.t-sub-nav .t-sub-nav {
  &.active {
    &::after {
    }
  }

  .t-sub-nav-popover {
    top: 0;
    left: 100%;
    margin-left: 8px;
  }

  .t-sub-nav-label {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .t-sub-nav-icon {
    transition: .25s;
    display: inline-flex;
    margin-left: 1em;

    svg {
      fill: $gray;
    }
    &.vertical {
      transform: rotate(90deg);
      &.open {
        transform: rotate(270deg);
      }
    }
    &.open {
      transform: rotate(180deg);
    }
  }
}
</style>
